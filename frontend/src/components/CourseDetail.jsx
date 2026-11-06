import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedPage from "./AnimatedPage";
import { API_BASE } from "../api";

const CourseDetail = () => {
  const { slug } = useParams();
  const [state, setState] = useState({ slug: null, course: null, status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${API_BASE}/courses/${encodeURIComponent(slug)}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (response.status === 404) return { status: "missing" };
        if (!response.ok) return Promise.reject();
        return response.json().then((result) => ({
          status: "ready",
          course: result.course,
        }));
      })
      .then((next) => setState({ slug, course: null, ...next }))
      .catch((error) => {
        if (error?.name !== "AbortError") {
          setState({ slug, course: null, status: "error" });
        }
      });

    return () => controller.abort();
  }, [slug]);

  if (state.slug !== slug || state.status === "loading") {
    return <AnimatedPage><main className="min-h-[40vh]" /></AnimatedPage>;
  }
  if (state.status === "missing") return <Navigate to="/courses" replace />;
  if (state.status === "error") {
    return (
      <AnimatedPage>
        <main className="mx-auto max-w-4xl px-4 py-16 text-center text-slate-600">
          <p role="alert">Course could not be loaded right now.</p>
          <Link to="/courses" className="mt-4 inline-block font-semibold text-blue-700 hover:underline">
            Back to courses
          </Link>
        </main>
      </AnimatedPage>
    );
  }

  const { course } = state;
  const facts = [
    { label: "Duration", value: course.duration },
    { label: "Fee", value: course.fee },
    { label: "Mode", value: course.mode },
    { label: "Eligibility", value: course.audience },
  ];

  return (
    <AnimatedPage>
      <main className="mx-auto max-w-4xl space-y-10 px-4 py-10 leading-relaxed sm:px-6 sm:py-14 lg:px-8">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" /> All courses
        </Link>

        <header className="space-y-4">
          {course.thumbnail_url && (
            <img
              src={course.thumbnail_url}
              alt={course.title}
              className="aspect-video w-full rounded-2xl border border-slate-200/80 object-cover"
            />
          )}
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            {course.title}
          </h1>
          <p className="text-lg text-slate-600">{course.description}</p>
        </header>

        <dl className="grid gap-4 sm:grid-cols-2">
          {facts.map(({ label, value }) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
            >
              <dt className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                {label}
              </dt>
              <dd className="mt-1 text-lg font-semibold text-slate-950">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">What you will learn</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            {course.curriculum.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-500"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Enroll now <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </main>
    </AnimatedPage>
  );
};

export default CourseDetail;
