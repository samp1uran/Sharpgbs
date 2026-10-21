import AnimatedPage from "./AnimatedPage";
import Image from "./Image";
import HomeWorkspaceIllustration from "./HomeWorkspaceIllustration";
import ServicesGrid from "./ServicesGrid";
import Testimonials from "./Testimonals";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <AnimatedPage>
      <main className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6 sm:py-16 lg:space-y-20 lg:px-8">
        <section
          className="relative isolate overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/80 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.28)]"
          data-aos="fade-up"
        >
          <div
            aria-hidden="true"
            className="ambient-float pointer-events-none absolute -right-32 -top-36 h-96 w-96 rounded-full bg-blue-300/35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="ambient-float pointer-events-none absolute -bottom-40 left-[38%] h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl [animation-delay:-3s]"
          />
          <div className="relative grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-16">
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Reliable support for growing businesses
              </span>
              <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
                The right support to{" "}
                <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  move your business forward.
                </span>
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                At Sharp GBS, we understand that running a successful business
                takes more than hard work; it takes the right support and
                expertise. Our professional services help streamline operations,
                strengthen your online presence, and support better decisions.
                From startups to established businesses, we tailor our work to
                your needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/25"
              >
                Talk to our team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="group rounded-3xl border border-white/80 bg-white/70 p-2 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5 sm:p-3">
              <HomeWorkspaceIllustration />
            </div>
          </div>
        </section>

        <section
          className="grid items-center gap-8 rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.3)] backdrop-blur-sm sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14"
          data-aos="fade-up"
        >
          <div className="order-2 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/70 p-3 ring-1 ring-slate-200/70 lg:order-1 sm:p-5">
            <Image src="/mission.png" alt="Our mission" obj="contain" />
          </div>
          <div className="order-1 space-y-5 lg:order-2">
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
              Our mission
            </span>
            <h2 className="max-w-lg text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Helping you do your best work.
            </h2>
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Our mission is to empower businesses by providing reliable
              services that simplify processes and improve productivity. Every
              business deserves high-quality support, and we’re committed to
              delivering work that helps you move forward with confidence.
            </p>
          </div>
        </section>

        <section className="space-y-7" aria-labelledby="services-heading">
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

        <section className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white shadow-[0_24px_80px_-35px_rgba(15,23,42,0.6)] sm:px-10 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-40 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl"
          />
          <div className="relative z-10 mx-auto max-w-3xl space-y-5">
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
