import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import axios from "axios";
import { toast } from "react-toastify";
import { Send, Loader2 } from "lucide-react"; // Using lucide-react for modern icons
import AnimatedPage from "./AnimatedPage";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setSuccess(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);

    try {
      await axios.post(`${API_URL.replace(/\/$/, "")}/contact`, form);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Unable to send your message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatedPage>
      <main className="px-4 py-12 md:py-20 max-w-6xl mx-auto flex flex-col justify-center min-h-[85vh]">
        
        <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch justify-center border border-slate-100">
          
          {/* Left Column: High Contrast Brand Area */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center items-center text-center p-10 lg:p-12 bg-slate-950 text-white relative overflow-hidden">
            {/* Subtle background glow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
                Let&apos;s talk about{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  everything!
                </span>
              </h1>
              <p className="text-slate-400 mb-8 max-w-xs text-sm leading-relaxed">
                Have a question or a project in mind? We&apos;re here to help you scale your business to the next level.
              </p>

              {/* Updated to frame the Lottie animation beautifully */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 bg-slate-900/50 rounded-full border border-slate-800 p-6 shadow-inner flex items-center justify-center">
                <DotLottieReact
                  src="https://lottie.host/94a723c2-146e-480a-9822-d01e3cde9ca4/Mkre1yDMOm.lottie"
                  loop
                  autoplay
                  className="w-full h-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form Area */}
          <div className="w-full lg:w-7/12 p-8 lg:p-14 bg-white">
            
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-500">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-6 px-6 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 p-3.5 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 p-3.5 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 XXXXX"
                    required
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 p-3.5 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you achieve your goals?"
                    required
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 p-3.5 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none shadow-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group relative w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-bold shadow-[0_8px_16px_rgba(37,99,235,0.2)] hover:bg-blue-700 hover:shadow-[0_12px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all duration-300 disabled:bg-slate-400 disabled:shadow-none disabled:translate-y-0 disabled:cursor-not-allowed mt-2"
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
}

export default Contact;