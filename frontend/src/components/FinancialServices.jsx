import AnimatedPage from "./AnimatedPage";
import Image from "./Image";
import { Link } from "react-router-dom";
const FinancialServices = () => {
  return (
    <AnimatedPage>
      <main className="mx-auto max-w-7xl px-4 py-10 leading-relaxed sm:px-6 sm:py-14 lg:px-8">
      <div className="space-y-12">

        {/* Header */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Financial services
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Professional Financial Support
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            In today’s competitive market, strong financial management is key to sustainable growth. Our financial services are designed to streamline operations, ensure compliance, and empower your decision-making with data-driven insights.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <Image src="/Book.jpg" alt="Financial recordkeeping" obj="contain" />
        </div>

        {/* Services Overview */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">What We Offer</h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Financial Recordkeeping</h3>
              <p className="mt-2 text-slate-600">
                We maintain accurate, organized records of all your transactions, creating a solid financial foundation for reporting and audits.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Accounts Management</h3>
              <p className="mt-2 text-slate-600">
                Timely and accurate management of accounts receivable and payable to keep your cash flow healthy and operations running smoothly.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Financial Reporting &amp; Analysis</h3>
              <p className="mt-2 text-slate-600">
                Gain insights with custom reports: balance sheets, income statements, and cash flow analysis to guide smart business decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Bank Reconciliation</h3>
              <p className="mt-2 text-slate-600">
                We reconcile your books with bank records to ensure accuracy, uncover discrepancies, and maintain integrity in financial reporting.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Payroll Services</h3>
              <p className="mt-2 text-slate-600">
                Accurate payroll processing with tax compliance and reporting — ensuring your employees are paid correctly and on time.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Financial Strategy &amp; Forecasting</h3>
              <p className="mt-2 text-slate-600">
                We help you plan for the future with budget forecasting, break-even analysis, and performance projections aligned with your goals.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-950">Why Financial Services Matter</h2>
          <ul className="grid gap-4 text-slate-600 sm:grid-cols-2">
            <li><strong>Time Efficiency:</strong> Focus on your core operations while we manage the numbers.</li>
            <li><strong>Financial Clarity:</strong> Make confident decisions based on accurate and up-to-date data.</li>
            <li><strong>Risk Reduction:</strong> Minimize errors and ensure regulatory compliance.</li>
            <li><strong>Scalability:</strong> Our services grow with your business, from startup to enterprise.</li>
            <li><strong>Peace of Mind:</strong> Know your finances are handled by professionals who care about your success.</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-950">Why Choose Us?</h2>
          <p className="text-slate-600">
            With years of experience and a commitment to excellence, we offer dependable financial support that adapts to your business goals.
          </p>
          <ul className="mt-5 grid gap-3 text-slate-600 sm:grid-cols-2">
            <li>Personalized, client-focused approach</li>
            <li>Up-to-date knowledge of financial regulations</li>
            <li>Transparent pricing and flexible packages</li>
            <li>Fast turnaround times and clear communication</li>
            <li>Data security and confidentiality guaranteed</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-slate-950 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="mb-2 text-2xl font-semibold">Let’s Talk Numbers</h2>
          <p className="mx-auto mb-5 max-w-2xl text-slate-300">
            Ready to transform your financial management? Get in touch to discuss your needs with our experts today!
          </p>
          <Link to="/contact">
            <span className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
              Contact us
            </span>
          </Link>
        </div>
      </div>
    </main>
    </AnimatedPage>
  );
};

export default FinancialServices;
