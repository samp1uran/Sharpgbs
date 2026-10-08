import AnimatedPage from "./AnimatedPage";
import Image from "./Image";
import ServicesGrid from "./ServicesGrid";
import Testimonials from "./Testimonals";
import ContactShortcut from "./ContactShortcut";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <AnimatedPage>
      <main className="px-4 py-8 max-w-7xl mx-auto leading-relaxed overflow-hidden">
        {/* Adjusted spacing from space-y-24 to space-y-12 to remove massive gaps */}
        <div className="space-y-12 lg:space-y-16">
          
          {/* Intro Section */}
          <section 
            className="bg-white p-8 lg:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative group"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none transition-opacity group-hover:opacity-100 duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Expert support for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">growing business.</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  At Sharp Gbs, we understand that running a successful business requires more than just hard work; it requires the right expertise. 
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Whether you’re a startup or an established enterprise, our dedicated team provides the tailored solutions you need to streamline operations and drive growth.
                </p>
              </div>

              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] ring-1 ring-slate-100">
                <Image src="/service_provider.avif" alt="Sharp Gbs Team" />
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section 
            className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100 relative group"
            data-aos="fade-up"
            data-aos-once="true"
          >
             <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 relative z-10">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  Our Mission
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  Empowering you to focus on what matters.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our mission is to empower businesses by providing exceptional services that simplify processes and enhance productivity. We believe every business deserves high-quality support, and we are committed to delivering results that exceed your expectations.
                </p>
              </div>

              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white p-4">
                <Image src="/mission.png" alt="Sharp Gbs Mission" obj="contain" />
              </div>
            </div>
          </section>

          {/* Services Section - Removed top padding to fix gap */}
          <section data-aos="fade-up" data-aos-once="true">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Services
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Comprehensive solutions tailored to scale your operations.
              </p>
            </div>
            <ServicesGrid />
          </section>

          {/* Testimonials */}
          <div data-aos="fade-up" data-aos-once="true">
            <Testimonials />
          </div>

          {/* CTA Banner - Removed mt-20 to fix gap */}
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
                Ready to take the next step?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Join the Sharp Gbs family. Let us be your trusted partner in navigating the complexities of business management. Together, we can achieve great things.
              </p>
              
              <div className="pt-8 w-full max-w-md mx-auto">
                <ContactShortcut />
              </div>

              <p className="pt-8 text-sm text-slate-400 italic">
                Stay Connected — Follow us on social media for the latest updates, tips, and insights to help your business thrive.
              </p>
            </div>
          </section>
          
        </div>
      </main>
    </AnimatedPage>
  );
}