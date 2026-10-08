import AnimatedPage from "./AnimatedPage";
import ContactShortcut from "./ContactShortcut";
import Image from "./Image";
import { Scale, CheckCircle2 } from "lucide-react";

export default function Terms() {
  return (
    <AnimatedPage>
      <main className="px-4 pt-8 pb-12 max-w-4xl mx-auto leading-relaxed overflow-hidden">
        <div className="space-y-10 lg:space-y-12">
          
          {/* Header Section */}
          <div 
            className="text-center space-y-4 pt-4"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-2">
              <Scale className="w-4 h-4" />
              Legal Information
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Terms of Service
            </h1>
            <p className="text-slate-500 font-medium text-lg">
              Please read these terms carefully before using our services.
            </p>
          </div>

          {/* Intro Section */}
          <section 
            className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100 relative group overflow-hidden"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none transition-opacity group-hover:opacity-100 duration-700"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <p className="md:w-1/2 text-lg text-slate-700 leading-relaxed">
                Welcome to Sharp Gbs. These Terms of Service ("Terms") govern your
                access to and use of our website, services, and applications
                (collectively, the "Services"). By accessing or using our
                Services, you agree to be bound by these Terms. If you do not
                agree to these Terms, please do not use our Services.
              </p>

              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white p-4">
                <Image 
                  src="https://static.vecteezy.com/system/resources/previews/009/268/574/non_2x/terms-and-conditions-legal-concept-design-man-checking-form-and-agree-with-the-terms-and-conditions-vector.jpg" 
                  alt="Terms and Conditions" 
                  obj="contain"
                />
              </div>
            </div>
          </section>

          {/* Terms Content Document */}
          <section 
            className="bg-white p-8 lg:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 space-y-8"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="text-blue-600">1.</span> Acceptance of Terms
              </h2>
              <p className="text-slate-600 pl-6 border-l-2 border-slate-100">
                By using our Services, you affirm that you are at least 18 years
                old or have the consent of a parent or guardian. If you are using
                the Services on behalf of an organization, you represent that you
                have the authority to bind that organization to these Terms.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="text-blue-600">2.</span> Changes to Terms
              </h2>
              <p className="text-slate-600 pl-6 border-l-2 border-slate-100">
                We may modify these Terms from time to time. We will notify you of
                any changes by posting the new Terms on our website and updating
                the "Last Updated" date at the top of this page. Your continued
                use of the Services after any changes constitutes your acceptance
                of the new Terms. We encourage you to review these Terms
                periodically.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="text-blue-600">3.</span> Privacy Policy
              </h2>
              <p className="text-slate-600 pl-6 border-l-2 border-slate-100">
                Your use of our Services is also governed by our Privacy Policy,
                which explains how we collect, use, and share your information. By
                using our Services, you consent to the collection and use of your
                information as outlined in our Privacy Policy.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="text-blue-600">4.</span> User Accounts
              </h2>
              <p className="text-slate-600 pl-6 border-l-2 border-slate-100">
                To access certain features of our Services, you may be required to
                create an account. You agree to provide accurate, current, and
                complete information during the registration process and to update
                such information to keep it accurate, current, and complete. You
                are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to notify us immediately of any unauthorized
                use of your account or any other breach of security.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="text-blue-600">5.</span> User Conduct
              </h2>
              <div className="text-slate-600 pl-6 border-l-2 border-slate-100 space-y-4">
                <p>
                  You agree to use our Services only for lawful purposes and in
                  accordance with these Terms. You agree not to:
                </p>
                <ul className="space-y-3">
                  {[
                    "Use the Services in any way that violates any applicable law or regulation.",
                    "Engage in conduct that restricts or inhibits anyone's use or enjoyment of the Services.",
                    "Use the Services to disable, overburden, damage, or impair the Services or interfere with others' use.",
                    "Use robots, spiders, or automated devices to access the Services without permission.",
                    "Introduce malicious software like viruses or trojans.",
                    "Attempt to gain unauthorized access to any part of the Services or connected systems."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="text-blue-600">6.</span> Intellectual Property Rights
              </h2>
              <p className="text-slate-600 pl-6 border-l-2 border-slate-100">
                All content on the Services, including text, graphics, logos,
                images, and software, is the exclusive property of Sharp Gbs or
                its licensors and protected by intellectual property laws. You may
                not reproduce, distribute, modify, or transmit any material
                without our prior written consent.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="text-blue-600">7.</span> Third-Party Links
              </h2>
              <p className="text-slate-600 pl-6 border-l-2 border-slate-100">
                Our Services may contain links to third-party websites or services
                not owned or controlled by Sharp Gbs. We are not responsible for
                their content or practices. Use them at your own risk.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="text-blue-600">8.</span> Disclaimers
              </h2>
              <p className="text-slate-600 pl-6 border-l-2 border-slate-100">
                The Services are provided "as-is" and "as-available" without
                warranties of any kind. We do not guarantee uninterrupted or
                error-free operation.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="text-blue-600">9.</span> Limitation of Liability
              </h2>
              <p className="text-slate-600 pl-6 border-l-2 border-slate-100">
                To the fullest extent permitted by law, Sharp Gbs and its
                affiliates shall not be liable for indirect or consequential
                damages, including lost profits, data, or goodwill resulting from
                your use of the Services.
              </p>
            </div>
          </section>

          {/* Call to Action Banner */}
          <section 
            className="relative bg-slate-950 text-white rounded-3xl p-10 lg:p-16 mt-12 overflow-hidden shadow-2xl flex flex-col items-center text-center"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-600/20 blur-[100px] rounded-full"></div>
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-cyan-600/20 blur-[100px] rounded-full"></div>
            </div>
            
            <div className="relative z-10 w-full max-w-2xl mx-auto">
              <ContactShortcut />
            </div>
          </section>

        </div>
      </main>
    </AnimatedPage>
  );
}