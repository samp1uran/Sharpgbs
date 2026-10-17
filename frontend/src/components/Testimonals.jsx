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
    feedback:
      "Highly recommend Sharp GBS! Their attention to detail and support made a huge difference in our workflow.",
    image: "/test3.png",
  },
  {
    name: "Satvir Singh",
    initials: "SS",
    website: "https://azcoatingssolutions.in",
    feedback:
    "Their 24/7 technical assistance and prompt bug resolution saved our product launch window. You can always count on the Sharp GBS support team.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative mb-7 py-4 px-6 sm:px-12 rounded-xl "
      id="testimonials"
    >
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800 drop-shadow-sm">
          💬 What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-2xl rounded-2xl p-6 text-left transition transform hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-white object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                    {t.website && (
                    <a
                      href={t.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-700 underline"
                    >
                      azcoatingssolutions.in
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
