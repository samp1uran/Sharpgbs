import { useCallback, useEffect, useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { inputClass } from "../adminUi";

const emptyForm = { name: "", feedback: "", display_order: 0, is_visible: true };

const TestimonialsManager = ({ request }) => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const result = await request("/admin/testimonials");
      setItems(result.testimonials);
    } catch (err) {
      setError(err.message);
    }
  }, [request]);

  useEffect(() => {
    load();
  }, [load]);

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");

    try {
      await request(
        editingId
          ? `/admin/testimonials/${editingId}`
          : "/admin/testimonials",
        {
          method: editingId ? "PUT" : "POST",
          body: JSON.stringify(form),
        },
      );
      resetForm();
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      name: item.name,
      feedback: item.feedback,
      display_order: item.display_order,
      is_visible: item.is_visible,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`Delete the testimonial from ${item.name}?`)) return;
    setError("");

    try {
      await request(`/admin/testimonials/${item.id}`, { method: "DELETE" });
      if (editingId === item.id) resetForm();
      await load();
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleVisibility = async (item) => {
    setError("");

    try {
      await request(`/admin/testimonials/${item.id}`, {
        method: "PUT",
        body: JSON.stringify({ ...item, is_visible: !item.is_visible }),
      });
      await load();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="space-y-8">
      {error && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSave}
        className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-bold text-slate-950">
          {editingId ? "Edit testimonial" : "Add testimonial"}
        </h2>
        <label className="block space-y-2 text-sm font-medium text-slate-700">
          Name
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className={inputClass}
            maxLength={100}
            required
          />
        </label>
        <label className="block space-y-2 text-sm font-medium text-slate-700">
          Feedback
          <textarea
            value={form.feedback}
            onChange={(event) =>
              setForm({ ...form, feedback: event.target.value })
            }
            className={`${inputClass} min-h-28`}
            maxLength={1000}
            required
          />
        </label>
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            Order
            <input
              type="number"
              value={form.display_order}
              onChange={(event) =>
                setForm({ ...form, display_order: event.target.value })
              }
              className={`${inputClass} w-24`}
            />
          </label>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <input
              type="checkbox"
              checked={form.is_visible}
              onChange={(event) =>
                setForm({ ...form, is_visible: event.target.checked })
              }
              className="h-4 w-4"
            />
            Show on website
          </label>
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={busy}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
          >
            <Plus aria-hidden="true" className="h-4 w-4" />
            {editingId ? "Save changes" : "Add testimonial"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="space-y-1">
              <p className="font-semibold text-slate-950">
                {item.name}{" "}
                <span className="text-xs font-normal text-slate-500">
                  #{item.display_order} · {item.is_visible ? "Visible" : "Hidden"}
                </span>
              </p>
              <p className="text-sm text-slate-600">{item.feedback}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => toggleVisibility(item)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.is_visible ? "Hide" : "Show"}
              </button>
              <button
                type="button"
                onClick={() => handleEdit(item)}
                aria-label={`Edit ${item.name}`}
                className="rounded-lg border border-slate-300 p-2 text-slate-700 hover:bg-slate-50"
              >
                <Pencil aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(item)}
                aria-label={`Delete ${item.name}`}
                className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50"
              >
                <Trash2 aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </li>
        ))}
        {!items.length && (
          <li className="text-center text-slate-500">No testimonials yet.</li>
        )}
      </ul>
    </div>
  );
};

export default TestimonialsManager;
