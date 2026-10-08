import AnimatedPage from "./AnimatedPage";
import ContactShortcut from "./ContactShortcut";
import Image from "./Image";
import { ShieldCheck, Database, FileText, Cookie } from "lucide-react";

const Privacy = () => {
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
              <ShieldCheck className="w-4 h-4" />
              Secure & Transparent
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-500 font-medium text-lg">
              Effective Date: April 20, 2025
            </p>
          </div>

          {/* Introduction */}
          <section 
            className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <p>
              Your privacy is of utmost importance to us at Sharp Gbs. This
              Privacy Policy outlines how we collect, use, and safeguard your
              personal information when you interact with our services. By using
              our website and services, you consent to the practices described in
              this policy.
            </p>
          </section>

          {/* Information Collection & Use - Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Information Collection */}
            <section 
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-full"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Information Collection</h3>
              </div>
              <p className="text-slate-600 mb-4">
                We collect personal information that you voluntarily provide to us when you interact with our website. This may include:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Contact Information:</strong> Such as your name, email address, phone number, and any other details you provide when filling out our contact form or subscribing to our newsletter.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, pages visited, and the time and date of your visit.</span>
                </li>
              </ul>
            </section>

            {/* Use of Information */}
            <section 
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-full"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-50 rounded-xl text-cyan-600">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Use of Information</h3>
              </div>
              <p className="text-slate-600 mb-4">
                The information we collect is used for the following purposes:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span><strong>To Respond to Inquiries:</strong> Your contact info helps us respond to your questions or requests.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span><strong>To Provide Our Services:</strong> To deliver the services you request and improve offerings.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span><strong>To Communicate with You:</strong> We may send updates, promotions, or other relevant information.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Data Security Section */}
          <section 
            className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100 relative group overflow-hidden"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  Data Security
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We take your security seriously. We implement strict measures to safeguard your data, including:
                </p>
                <ul className="space-y-4 text-slate-600 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5"></div>
                    <span><strong>Encryption:</strong> Protects sensitive info transmitted online.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5"></div>
                    <span><strong>Access Controls:</strong> Limits access to authorized personnel only.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5"></div>
                    <span><strong>Regular Security Audits:</strong> Ensures ongoing protection.</span>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white p-4">
                <Image 
                  src="https://img.freepik.com/premium-vector/data-protection-concept-data-security-privacy-internet-security-flat-vector-illustration_199064-1167.jpg" 
                  alt="Data Security" 
                  obj="contain" 
                />
              </div>
            </div>
          </section>

          {/* Cookies Section */}
          <section 
            className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                <Cookie className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Cookies</h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our site may use cookies to enhance your experience. You can choose to accept or decline cookies via your browser settings. Please note that declining cookies may limit certain features of our website.
            </p>
          </section>

          {/* Call to Action */}
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
};

export default Privacy;