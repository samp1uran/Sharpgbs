import { useState } from "react";
import axios from "axios";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimatedPage from "./AnimatedPage";
import Button from "@mui/material/Button";
const API_URL = import.meta.env.VITE_API;
export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [sending,setSending]=useState('Send Message')
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSending('Sending')
      const res = await axios.post(`${API_URL}/contact`, form);
      if (res.status===200) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
    finally{
      setSending('Send Message')
    }
  };

  return (
    <AnimatedPage>
      <main className="px-6 mb-4 text-gray-800 max-w-5xl mx-auto leading-relaxed">
        <div className="flex flex-col bg-white shadow-lg lg:flex-row items-center justify-center px-4 py-4 lg:py-14 gap-10">
          {/* Left side - Lottie animation */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left">
            <h1 className="text-3xl font-bold mb-3">
              Let's talk about{" "}
              <span className="text-purple-600">everything!</span>
            </h1>
            <DotLottieReact
              src="https://lottie.host/94a723c2-146e-480a-9822-d01e3cde9ca4/Mkre1yDMOm.lottie"
              loop
              autoplay
              style={{ width: 300, height: 300 }}
            />
            {success && (
              <p className="text-green-600 mt-2">Message sent successfully!</p>
            )}
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="border border-gray-300 p-3 rounded focus:outline-none focus:border-purple-500"
              />
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="border border-gray-300 p-3 rounded focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 XXXXX"
                required
                className="border border-gray-300 p-3 rounded focus:outline-none focus:border-purple-500"
              />
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="border border-gray-300 p-3 rounded focus:outline-none focus:border-purple-500"
              ></textarea>
              <div className="flex justify-start gap-4 flex-1/2">
                <Button
                  type="submit"
                  variant="contained"
                  className="!bg-black !text-white !normal-case !whitespace-nowrap !px-6 !h-fit !py-3 md:!py-3 md:!px-6  !rounded hover:bg-gray-800 transition"
                >
                  {sending}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
}
