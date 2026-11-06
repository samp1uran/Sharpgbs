import { useCallback, useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { API_BASE } from "../api";
import { inputClass } from "../adminUi";
import TestimonialsManager from "./TestimonialsManager";
import CoursesManager from "./CoursesManager";

const TOKEN_KEY = "sharpgbs-admin-token";

const tabs = [
  { id: "courses", label: "Courses" },
  { id: "testimonials", label: "Testimonials" },
];

const Admin = () => {
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY));
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState("courses");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken(null);
  }, []);

  const request = useCallback(
    async (path, options = {}) => {
      const response = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...options.headers,
        },
      });
      const result = await response.json().catch(() => ({}));

      if (response.status === 401 && token) logout();
      if (!response.ok) throw new Error(result.msg || "Request failed.");
      return result;
    },
    [token, logout],
  );

  const handleLogin = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");

    try {
      const result = await request("/admin/login", {
        method: "POST",
        body: JSON.stringify({ password }),
      });
      sessionStorage.setItem(TOKEN_KEY, result.token);
      setToken(result.token);
      setPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  if (!token) {
    return (
      <main className="mx-auto max-w-md px-4 py-16">
        <form
          onSubmit={handleLogin}
          className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h1 className="text-2xl font-bold text-slate-950">Admin login</h1>
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={inputClass}
              autoComplete="current-password"
              required
            />
          </label>
          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
          >
            {busy ? "Logging in..." : "Log in"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-950">Admin panel</h1>
        <button
          type="button"
          onClick={logout}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          <LogOut aria-hidden="true" className="h-4 w-4" /> Log out
        </button>
      </div>

      <div role="tablist" className="flex gap-2 border-b border-slate-200">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`-mb-px border-b-2 px-4 py-2 text-sm font-semibold transition ${
              tab === id
                ? "border-blue-700 text-blue-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "courses" ? (
        <CoursesManager request={request} />
      ) : (
        <TestimonialsManager request={request} />
      )}
    </main>
  );
};

export default Admin;
