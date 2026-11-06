import { useCallback, useEffect, useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { inputClass } from "../adminUi";

const emptyForm = {
  title: "",
  slug: "",
  description: "",
  duration: "",
  fee: "",
  mode: "",
  audience: "",
  curriculum: "",
  thumbnail_url: "",
  display_order: 0,
  is_visible: true,
};

const Field = ({ label, children }) => (
  <label className="block space-y-2 text-sm font-medium text-slate-700">
    {label}
    {children}
  </label>
);

const CoursesManager = ({ request }) => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const result = await request("/admin/courses");
      setItems(result.courses);
    } catch (err) {
      setError(err.message);
    }
  }, [request]);

  useEffect(() => {
    load();
  }, [load]);

  const update = (key) => (event) =>
    setForm({ ...form, [key]: event.target.value });

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const toPayload = (values) => ({
    ...values,
    curriculum:
      typeof values.curriculum === "string"
        ? values.curriculum.split("\n")
        : values.curriculum,
  });

  const handleSave = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");

    try {
      await request(
        editingId ? `/admin/courses/${editingId}` : "/admin/courses",
        {
          method: editingId ? "PUT" : "POST",
          body: JSON.stringify(toPayload(form)),
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

  const handleThumbnail = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
      setError("Please choose a PNG, JPG or WebP image.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setError("Image is too large. Maximum size is 2 MB.");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const result = await request("/admin/courses/thumbnail", {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });
      setForm((current) => ({ ...current, thumbnail_url: result.url }));
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      ...item,
      thumbnail_url: item.thumbnail_url ?? "",
      curriculum: item.curriculum.join("\n"),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`Delete the course "${item.title}"?`)) return;
    setError("");

    try {
      await request(`/admin/courses/${item.id}`, { method: "DELETE" });
      if (editingId === item.id) resetForm();
      await load();
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleVisibility = async (item) => {
    setError("");

    try {
      await request(`/admin/courses/${item.id}`, {
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
          {editingId ? "Edit course" : "Add course"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Title">
            <input
              value={form.title}
              onChange={update("title")}
              className={inputClass}
              maxLength={100}
              required
            />
          </Field>
          <Field label="URL slug (blank = from title)">
            <input
              value={form.slug}
              onChange={update("slug")}
              className={inputClass}
              placeholder="zero-to-hero"
              maxLength={80}
            />
          </Field>
          <Field label="Duration">
            <input
              value={form.duration}
              onChange={update("duration")}
              className={inputClass}
              placeholder="2.5 months"
              maxLength={50}
              required
            />
          </Field>
          <Field label="Fee">
            <input
              value={form.fee}
              onChange={update("fee")}
              className={inputClass}
              placeholder="₹5,000"
              maxLength={50}
              required
            />
          </Field>
          <Field label="Mode">
            <input
              value={form.mode}
              onChange={update("mode")}
              className={inputClass}
              placeholder="Online & Offline"
              maxLength={50}
              required
            />
          </Field>
          <Field label="Eligibility">
            <input
              value={form.audience}
              onChange={update("audience")}
              className={inputClass}
              maxLength={200}
              required
            />
          </Field>
        </div>
        <Field label="Description">
          <textarea
            value={form.description}
            onChange={update("description")}
            className={`${inputClass} min-h-24`}
            maxLength={1000}
            required
          />
        </Field>
        <Field label="Thumbnail (PNG, JPG or WebP, max 2 MB)">
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={handleThumbnail}
            disabled={uploading}
            className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
          />
        </Field>
        {uploading && <p className="text-sm text-slate-500">Uploading...</p>}
        {form.thumbnail_url && (
          <div className="flex items-start gap-4">
            <img
              src={form.thumbnail_url}
              alt="Thumbnail preview"
              className="h-28 w-48 rounded-xl border border-slate-200 object-cover"
            />
            <button
              type="button"
              onClick={() => setForm({ ...form, thumbnail_url: "" })}
              className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
            >
              Remove thumbnail
            </button>
          </div>
        )}
        <Field label="What you will learn (one point per line)">
          <textarea
            value={form.curriculum}
            onChange={update("curriculum")}
            className={`${inputClass} min-h-28`}
          />
        </Field>
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            Order
            <input
              type="number"
              value={form.display_order}
              onChange={update("display_order")}
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
            disabled={busy || uploading}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
          >
            <Plus aria-hidden="true" className="h-4 w-4" />
            {editingId ? "Save changes" : "Add course"}
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
                {item.title}{" "}
                <span className="text-xs font-normal text-slate-500">
                  #{item.display_order} · {item.is_visible ? "Visible" : "Hidden"} · /courses/{item.slug}
                </span>
              </p>
              <p className="text-sm text-slate-600">
                {item.duration} · {item.fee} · {item.mode}
              </p>
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
                aria-label={`Edit ${item.title}`}
                className="rounded-lg border border-slate-300 p-2 text-slate-700 hover:bg-slate-50"
              >
                <Pencil aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(item)}
                aria-label={`Delete ${item.title}`}
                className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50"
              >
                <Trash2 aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </li>
        ))}
        {!items.length && (
          <li className="text-center text-slate-500">No courses yet.</li>
        )}
      </ul>
    </div>
  );
};

export default CoursesManager;
