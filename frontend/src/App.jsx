import { useEffect } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Legal from "./components/Legal";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import FinancialServices from "./components/FinancialServices";
import Development from "./components/Development";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure CSS is imported
import WhatsAppIcon from "./components/WhatsAppIcon";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteSeo from "./components/RouteSeo";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <RouteSeo />
        <Header />
        
        {/* 2. Main Content Area with Route Animations */}
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:slug" element={<CourseDetail />} />
              <Route path="/admin" element={<Admin />} />
              <Route
                path="/privacy"
                element={<Navigate to="/legal#privacy" replace />}
              />
              <Route
                path="/terms"
                element={<Navigate to="/legal#terms" replace />}
              />
              <Route path="/services" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/services/financialServices"
                element={<FinancialServices />}
              />
              <Route path="/services/development" element={<Development />} />
            </Routes>
          </AnimatePresence>
        </div>

        {/* 3. Global Footer */}
        <Footer />

        {/* 4. Persistent Floating Elements */}
        <WhatsAppIcon />
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          limit={3}
        />
      </div>
    </Router>
  );
}

export default App;
