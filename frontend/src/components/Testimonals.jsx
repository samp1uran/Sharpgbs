import { ExternalLink, Quote } from "lucide-react";

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
    website: "https://www.azcoatingssolutions.in/",
    feedback:
      "Working with Sharp GBS has been an exceptional experience. Their strategic approach helped elevate our business.",
    // This dynamically generates a professional "SS" avatar matching your brand colors
    image: "https://ui-avatars.com/api/?name=Satvir+Singh&background=eff6ff&color=2563eb&bold=true", 
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Modern Header - Dropped the emoji for a cleaner, professional look */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here is how we are helping businesses scale.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-blue-200 flex flex-col relative group"
            >
              {/* Subtle decorative quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 group-hover:text-blue-50 transition-colors duration-300" />
              
              <p className="text-slate-600 text-sm leading-relaxed mb-8 relative z-10 flex-grow">
                "{t.feedback}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover bg-slate-100"
                />
                <div className="flex flex-col">
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  
                  {/* Conditionally render the website link if it exists */}
                  {t.website && (
                    <a 
                      href={t.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mt-0.5 transition-colors"
                    >
                      Client Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;