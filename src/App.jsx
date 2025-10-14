// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";       // <-- import useEffect
import AOS from "aos";                  // <-- import AOS
import "aos/dist/aos.css";              // <-- import AOS CSS
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/Notfound";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';
import FloatingWhatsApp from "./components/FloatingWhatsapp";

function App() {
  // Initialize AOS globally
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once
    });
  }, []);

  return (
    <>
    <Router>
      <Navbar />
          <Toaster position="top-right" reverseOrder={false} />
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
    <FloatingWhatsApp/>
    </>
  );
}

export default App;
