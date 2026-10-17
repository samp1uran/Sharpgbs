import AnimatedPage from "./AnimatedPage";
import Image from "./Image";
import { Link } from "react-router-dom";
export default function Development() {
  return (
    <AnimatedPage>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-10 leading-relaxed sm:px-6 sm:py-14 lg:px-8">
        <header className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Website care and support
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Development
          </h1>
          <p className="text-lg text-slate-600">
            Practical WordPress management to keep your website secure, up to
            date, and working smoothly.
          </p>
        </header>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <Image src="/wordpressManagement.png" alt="Wordpress Management" />
        </div>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Comprehensive Website Development</h2>
          <p className="mt-3 text-slate-600">
            Your website is often the first impression potential customers have of your business. Our WordPress management services cover all critical aspects of your site, including theme maintenance, plugin updates, uptime monitoring, and performance optimization. We ensure that your website remains fast, reliable, and secure — giving you peace of mind while you focus on your business.
          </p>
          <p className="mt-3 text-slate-600">
            We handle daily backups, implement advanced firewall protection, and keep your CMS and plugins up to date — eliminating vulnerabilities and enhancing security. With our proactive monitoring and support, we detect and resolve issues before they impact your site or users.
          </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Speed &amp; Performance Optimization</h2>
          <p className="mt-3 text-slate-600">
            Slow websites hurt user experience and SEO rankings. That’s why we optimize loading speeds by compressing images, leveraging caching strategies, minimizing code, and fine-tuning server settings. Whether you're running an eCommerce platform or a content-driven blog, we'll ensure your site performs efficiently across all devices.
          </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">SEO &amp; Visibility</h2>
          <p className="mt-3 text-slate-600">
            What good is a website if no one can find it? Our team applies on-page SEO best practices, improves metadata, integrates structured data, and ensures your content is indexed properly. We also set up and manage SEO plugins like RankMath or Yoast to give your site a competitive edge in search engine rankings.
          </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Customization &amp; Content Updates</h2>
          <p className="mt-3 text-slate-600">
            Need to refresh your brand or redesign a section of your site? From customizing themes to adding new content, we handle it all. Whether it's updating product listings, posting blogs, adding images, or tweaking layouts — we make sure everything aligns with your brand’s voice and vision.
          </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Why Choose Us?</h2>
          <p className="mt-3 text-slate-600">
            Managing a WordPress site can be time-consuming and technically demanding. Our expert team provides personalized, scalable solutions for businesses of all sizes. With transparent communication, fast turnaround, and dependable support — we’re your trusted partner for digital success.
          </p>
          <ul className="mt-4 grid gap-2 text-slate-600 sm:grid-cols-2">
            <li>Ongoing maintenance and 24/7 uptime monitoring</li>
            <li>Security audits and malware protection</li>
            <li>Responsive updates and page improvements</li>
            <li>Integrated analytics and performance reporting</li>
            <li>Affordable monthly management plans</li>
          </ul>
          </div>
        </section>

        <section className="rounded-3xl bg-slate-950 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="mb-5 text-2xl font-semibold">Ready to leave your website in expert hands?</h2>
          <Link to="/contact">
            <span className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
              Get in touch
            </span>
          </Link>
        </section>
      </main>
    </AnimatedPage>
  );
}
