import AnimatedPage from "./AnimatedPage";
import ContactShortcut from "./ContactShortcut";
import Image from "./Image";
import { Sparkles, Users, Target } from "lucide-react";

const About = () => {
  return (
    <AnimatedPage>
      {/* Changed py-8 to pt-8 pb-0 to remove bottom whitespace */}
      <main className="px-4 pt-8 pb-0 max-w-7xl mx-auto leading-relaxed overflow-hidden">
        <div className="space-y-12 lg:space-y-16">
          
          {/* Header Section */}
          <div 
            className="text-center space-y-4 pt-4"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Partners Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Sharp Gbs</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Dedicated to your long-term success through integrity, excellence, and innovation.
            </p>
          </div>

          {/* Section 1: Strategy Meets Execution */}
          <section 
            className="bg-white p-8 lg:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative group"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none transition-opacity group-hover:opacity-100 duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  Our Approach
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  Strategy Meets Execution.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We are more than just a freelancing company — we are your strategic partner in navigating the complexities of the modern business landscape. 
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Built on the foundational principles of integrity, excellence, and innovation, we are committed to delivering value-driven solutions that go beyond expectations. With us, you gain not just a service provider — but a trusted ally dedicated to your long-term success.
                </p>
              </div>

              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] ring-1 ring-slate-100">
                <Image src="/success.webp" alt="Strategy and Success" obj="cover" />
              </div>
            </div>
          </section>

          {/* Section 2: Who We Are */}
          <section 
            className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100 relative group"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 relative z-10">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm">
                  <Users className="w-4 h-4" />
                  Who We Are
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  Experts driven by your success.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Sharp Gbs is a team of experienced professionals with a passion for helping businesses succeed. Our expertise spans various fields, including bookkeeping, WordPress management, data analysis, content writing management, and digital consulting.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We understand that every business is unique, and we take pride in offering tailored solutions that meet your specific needs.
                </p>
              </div>

              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white p-4">
                <Image src="/team.jpg" alt="Sharp Gbs Team" obj="contain" />
              </div>
            </div>
          </section>
          
          {/* Section 3: Our Mission */}
          <section 
            className="bg-white p-8 lg:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative group"
            data-aos="fade-up"
            data-aos-once="true"
          >
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-50 rounded-full blur-3xl opacity-50 pointer-events-none transition-opacity group-hover:opacity-100 duration-700"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  A valuable extension of your team.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our mission is to deliver high-quality, reliable services that enable our clients to focus on what they do best—growing their business. 
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We believe in building long-term relationships with our clients based on trust, transparency, and exceptional service. Our goal is to provide the support and expertise you need to thrive in a competitive landscape.
                </p>
              </div>

              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-slate-50 p-4 ring-1 ring-slate-100">
                <Image src="/mission.png" alt="Mission" obj="contain" />
              </div>
            </div>
          </section>

          {/* CTA / Stay Connected Section */}
          <section 
            className="relative bg-slate-950 text-white rounded-3xl p-10 lg:p-16 overflow-hidden shadow-2xl flex flex-col items-center text-center"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-600/20 blur-[100px] rounded-full"></div>
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-cyan-600/20 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-3xl space-y-6">
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
                Stay Connected
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights, tips, and updates from Sharp Gbs. Together, we can navigate the path to success!
              </p>
              
              <div className="pt-8 w-full max-w-md mx-auto">
                <ContactShortcut />
              </div>
            </div>
          </section>

        </div>
      </main>
    </AnimatedPage>
  );
};

export default About;