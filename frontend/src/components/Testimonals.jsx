import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Tiwari",
    initials: "RT",
    feedback:
      "Sharp GBS has transformed the way we manage our operations. Their service is prompt, professional, and always reliable.",
  },
  {
    name: "Priya Mehta",
    initials: "PM",
    feedback:
      "Impressive team and even better results. Sharp GBS truly understands what businesses need and delivers beyond expectations.",
  },
  {
    name: "Janvi",
    initials: "JV",
    feedback:
      "Highly recommend Sharp GBS! Their attention to detail and support made a huge difference in our workflow.",
  },
  {
    name: "Satvir Singh",
    initials: "SS",
    feedback:
      "Their 24/7 technical assistance and prompt bug resolution saved our product launch window. You can always count on the Sharp GBS support team.",
  },
  {
    name: "Gobind Glass House",
    initials: "GH",
    feedback:
      "Sharp GBS provided professional support and helped us find the right solutions for our business needs.",
  },
  {
    name: "Ram Singh",
    initials: "RS",
    feedback:
      "Working with the team at Sharp GBS has been a game-changer for our organization. They took the time to deeply understand our challenges and delivered tailored solutions that perfectly aligned with our business goals.",
  },
];

const Testimonials = () => {
  return (
    <section className="space-y-8" id="testimonials">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
          Client experiences
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="text-slate-600">
          A few words from the people and businesses we work with.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-white to-blue-50/60 p-6 text-left shadow-[0_12px_35px_-28px_rgba(15,23,42,0.4)] transition duration-200 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 sm:p-7"
            >
              <Quote
                aria-hidden="true"
                className="absolute right-5 top-5 h-8 w-8 text-blue-200"
              />
              <div className="relative z-10 mb-5 flex items-center gap-4">
                {t.initials ? (
                  <div
                    role="img"
                    aria-label={`${t.name} initials`}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 font-bold text-white shadow-sm shadow-blue-700/20"
                  >
                    {t.initials}
                  </div>
                ) : (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-slate-100"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-slate-900">{t.name}</h3>
                </div>
              </div>
              <p className="relative z-10 flex-1 border-l-2 border-blue-100 pl-4 text-sm leading-6 text-slate-600">
                {t.feedback}
              </p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Testimonials;
