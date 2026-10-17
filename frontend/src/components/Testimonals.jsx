import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Tiwari",
    feedback:
      "Sharp GBS has transformed the way we manage our operations. Their service is prompt, professional, and always reliable.",
    image: "/test1.jpeg",
  },
  {
    name: "Priya Mehta",
    feedback:
      "Impressive team and even better results. Sharp GBS truly understands what businesses need and delivers beyond expectations.",
    image: "/test2.jpeg",
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
    name: "Furniture World",
    initials: "FW",
    feedback:
      "Sharp GBS provided professional support and helped us find the right solutions for our business needs.",
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
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center gap-4">
                {t.initials ? (
                  <div
                    role="img"
                    aria-label={`${t.name} initials`}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white"
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
              <Quote
                aria-hidden="true"
                className="mb-2 h-5 w-5 text-blue-600"
              />
              <p className="flex-1 text-sm leading-6 text-slate-600">
                {t.feedback}
              </p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Testimonials;
