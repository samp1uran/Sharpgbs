import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimatedPage from "./AnimatedPage";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const fields = [
  {
    id: "name",
    label: "Full name",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",
  },
  {
    id: "email",
    label: "Email address",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
  },
  {
    id: "phone",
    label: "Phone number",
    type: "tel",
    placeholder: "+91 98765 43210",
    autoComplete: "tel",
  },
];

const inputClassName =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10";

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.msg || "Unable to send your message.");
      }

      setForm(initialForm);
      setSuccess(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send your message.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatedPage>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center bg-slate-950 px-6 py-10 text-center text-white sm:px-10 lg:p-12">
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-sky-200 ring-1 ring-white/10">
              We’re here to help
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Let’s talk about your next big idea.
            </h1>
            <p className="mt-4 max-w-md leading-7 text-slate-300">
              Have a question or a project in mind? Send us a message and our
              team will be happy to help.
            </p>
            <DotLottieReact
              src="https://lottie.host/94a723c2-146e-480a-9822-d01e3cde9ca4/Mkre1yDMOm.lottie"
              loop
              autoplay
              className="mt-5 h-52 w-52 sm:h-64 sm:w-64"
            />
            {success && (
              <p
                role="status"
                className="rounded-xl bg-emerald-400/10 px-4 py-3 font-medium text-emerald-200 ring-1 ring-emerald-300/20"
              >
                Message sent successfully. Thank you for reaching out!
              </p>
            )}
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Send us a message
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Fill in the form and we’ll get back to you as soon as we can.
            </p>

            {error && (
              <p
                role="alert"
                className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
              {fields.map(({ id, label, type, placeholder, autoComplete }) => (
                <div key={id} className="space-y-2">
                  <label
                    htmlFor={id}
                    className="block text-sm font-semibold text-slate-800"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    name={id}
                    value={form[id]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    required
                    className={inputClassName}
                  />
                </div>
              ))}

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className={`${inputClassName} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {sending ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
}

export default Contact;
