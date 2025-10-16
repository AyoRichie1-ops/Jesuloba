import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const validateForm = (fields) => {
    const newErrors = {};
    if (!fields.name.trim()) newErrors.name = "Name is required!";
    if (!fields.email.trim() || !/^\S+@\S+\.\S+$/.test(fields.email)) newErrors.email = "Valid email is required!";
    if (!fields.phone.trim() || !/^\d{10,15}$/.test(fields.phone)) newErrors.phone = "Phone number must be 10-15 digits!";
    if (!fields.message.trim()) newErrors.message = "Message cannot be empty!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    if (!validateForm(fields)) return;

    setLoading(true);
    formData.append("access_key", "f0358ef5-1e9c-4c47-86c2-4902e49a59c8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        toast.success("✅ Message Sent Successfully!");
        event.target.reset();
        setErrors({});
      } else {
        toast.error("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      toast.error("❌ Network Error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-40 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE - Contact Info */}
        <div data-aos="fade-right" className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 mb-6">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Have a question about our solar, inverter, or electrical services? Reach out — we’d love to hear from you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3"><FaPhoneAlt className="text-green-600 text-xl" /><span>+234 906 176 3716</span></div>
            <div className="flex items-center gap-3"><FaEnvelope className="text-green-600 text-xl" /><span>Jesulobacompany111@gmail.com</span></div>
            <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-green-600 text-xl" /><span>12, Oremeji St, Bariga Lagos, Nigeria</span></div>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <a href="#" className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"><FaFacebookF /></a>
            <a href="https://wa.me/2349061763716" target="_blank" rel="noopener noreferrer" className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"><FaWhatsapp /></a>
          </div>
        </div>

        {/* RIGHT SIDE - Form */}
        <form onSubmit={onSubmit} data-aos="fade-left" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={loading}
              />
              {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={loading}
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
            </div>
          </div>

          <div className="flex flex-col">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={loading}
            />
            {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
          </div>

          <div className="flex flex-col">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={loading}
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all ${loading ? "cursor-not-allowed opacity-70" : ""}`}
          >
            {loading ? "Please Wait..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
