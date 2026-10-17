import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedPage from "./AnimatedPage";
import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <AnimatedPage>
      <main className="mx-auto max-w-7xl space-y-12 px-4 py-10 leading-relaxed sm:px-6 sm:py-14 lg:px-8">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            How we can help
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Our Services
          </h1>
          <p className="text-lg text-slate-600">
              At Sharp Gbs, we pride ourselves on offering a diverse range of
              professional services designed to meet the unique needs of your
              business. Our commitment to excellence ensures that you receive
              the highest quality support in every area we cover. Explore our
              key services.
          </p>
        </header>

        <ServicesGrid />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              At Sharp Gbs, we are dedicated to helping your business thrive
              through our comprehensive suite of services. Whether you need
              meticulous bookkeeping, expert WordPress management, insightful
              data analysis, engaging content writing, or any of our additional
              services, we have the expertise to support your growth.
            </h2>

            <p className="text-slate-600">
              Ready to take your business to the next level? Reach out to us
              today to discuss your specific needs and discover how we can
              tailor our services to help you achieve your business objectives.
              Our team is here to provide you with the support and guidance you
              need to succeed.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Contact us today <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
};

export default Services;
