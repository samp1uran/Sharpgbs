import AnimatedPage from "./AnimatedPage";
import Image from "./Image";
import ServicesGrid from "./ServicesGrid";
import Testimonials from "./Testimonals";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <AnimatedPage>
      <main className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 sm:py-14 lg:space-y-16 lg:px-8">
        <section
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          data-aos="fade-up"
        >
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                Reliable support for growing businesses
              </span>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                The right support to move your business forward.
              </h1>
              <p className="text-base leading-7 text-slate-600 sm:text-lg">
                At Sharp GBS, we understand that running a successful business
                takes more than hard work; it takes the right support and
                expertise. Our professional services help streamline operations,
                strengthen your online presence, and support better decisions.
                From startups to established businesses, we tailor our work to
                your needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                Talk to our team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100 sm:p-5">
              <Image
                src="/service_provider.avif"
                alt="Professional support for businesses"
                obj="cover"
              />
            </div>
          </div>
        </section>

        <section
          className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12"
          data-aos="fade-up"
        >
          <div className="order-2 overflow-hidden rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100 lg:order-1 sm:p-5">
            <Image src="/mission.png" alt="Our mission" obj="contain" />
          </div>
          <div className="order-1 space-y-4 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Our mission
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Helping you do your best work.
            </h2>
            <p className="text-base leading-7 text-slate-600 sm:text-lg">
              Our mission is to empower businesses by providing reliable
              services that simplify processes and improve productivity. Every
              business deserves high-quality support, and we’re committed to
              delivering work that helps you move forward with confidence.
            </p>
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="services-heading">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              How we can help
            </span>
            <h2
              id="services-heading"
              className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              Our Services
            </h2>
            <p className="text-slate-600">
              Practical, professional support built around your business needs.
            </p>
          </div>
          <ServicesGrid />
        </section>

        <Testimonials />

        <section className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-14">
          <div className="mx-auto max-w-3xl space-y-5">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-300">
              Let’s work together
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to take the next step?
            </h2>
            <p className="text-slate-300">
              Get in touch to see how Sharp GBS can support your growth and
              success. We’re here to answer your questions and find the right
              solution for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
}
