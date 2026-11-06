import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import AnimatedPage from "./AnimatedPage";
import { API_BASE } from "../api";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${API_BASE}/courses`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((result) => setCourses(result.courses))
      .catch((error) => {
        if (error?.name !== "AbortError") setFailed(true);
      });

    return () => controller.abort();
  }, []);

  return (
    <AnimatedPage>
      <main className="mx-auto max-w-7xl space-y-12 px-4 py-10 leading-relaxed sm:px-6 sm:py-14 lg:px-8">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Learn with us
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Our Courses
          </h1>
          <p className="text-lg text-slate-600">
            Practical, hands-on training designed to help you build real skills
            and grow with confidence.
          </p>
        </header>

        {failed && (
          <p role="alert" className="text-center text-slate-600">
            Courses could not be loaded right now. Please try again later.
          </p>
        )}
        {courses && !courses.length && (
          <p className="text-center text-slate-600">
            New courses are coming soon.
          </p>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          {(courses ?? []).map(
            ({ slug, title, description, duration, fee, thumbnail_url }) => (
            <Link
              key={slug}
              to={`/courses/${slug}`}
              className="group flex min-h-44 flex-col gap-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-[0_12px_35px_-28px_rgba(15,23,42,0.4)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5"
            >
              {thumbnail_url && (
                <img
                  src={thumbnail_url}
                  alt={title}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 transition duration-200 group-hover:bg-blue-700 group-hover:text-white group-hover:ring-blue-700">
                  <GraduationCap aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-bold text-slate-950">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between gap-3 text-sm font-semibold">
                <span className="text-slate-600">
                  {duration} · {fee}
                </span>
                <span className="inline-flex items-center gap-1 text-blue-700">
                  View details <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </div>
              </div>
            </Link>
            ),
          )}
        </div>
      </main>
    </AnimatedPage>
  );
};

export default Courses;
