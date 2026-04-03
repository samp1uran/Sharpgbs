import { useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FinancialServices from "./components/FinancialServices";
import Development from "./components/Development";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import WhatsAppIcon from "./components/WhatsAppIcon";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <<div className="relative">
      <Navbar />
      
      {/* Your Page Content */}
      <main>
        {/* Routes go here */}
      </main>

      <Footer />

      {/* Logic: Placing it here ensures it floats above EVERYTHING */}
      <WhatsAppIcon />
    </div>>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/services/financialServices"
            element={<FinancialServices />}
          />
          <Route path="/services/development" element={<Development />} />
        </Routes>
      </AnimatePresence>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        limit={3}
      />
    </>
  );
}

export default App;
