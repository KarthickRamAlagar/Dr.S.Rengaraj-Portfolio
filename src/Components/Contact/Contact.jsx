import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import RestrictedAlert from "../RestrictedAlert.jsx";
import { forwardRef } from "react";
import Arrow from "/assets/arrow-up.png";
const Contact = forwardRef((props, ref) => {
  const FormRef = useRef();
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
    setAlertMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //  First email: to USER using template_t4pubid
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // template_t4pubid
        {
          to_name: formData.name,
          to_email: formData.email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      //  Second email: to OWNER using template_earen2r
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_FOLLOWUP_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Dr.S.Rengaraj",
          to_email: "rengaraj984@gmail.com",
          time: new Date().toLocaleString(), // optional if used in template
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      showAlert("Thank you for your message 😃");

      setTimeout(() => {
        hideAlert();
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.error("Email sending error:", error);
      showAlert("I didn't receive your message 😢");
    }
  };

  return (
    <section className="c-space my-20" id="contact" ref={ref}>
      {alertVisible && (
        <RestrictedAlert
          show={alertVisible}
          message={alertMessage}
          onClose={hideAlert}
        />
      )}

      <div className="relative py-20 flex items-center justify-center flex-col min-h-screen px-4 sm:px-6 -mt-20 lg:mt-0">
        <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 shadow-[0_0_60px_-10px_rgba(56,189,248,0.6)]">
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-3 flex items-center gap-2 border-b border-gray-600/50">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 bg-gray-900/95 backdrop-blur-sm">
            <h3 className="head-text mt-2 text-white text-3xl sm:text-4xl font-bold text-center">
              Let's Chat
            </h3>
            <p className="text-base sm:text-lg text-white-600 mt-3 text-center">
              Open to Academic Collaborations — Committed to advancing commerce
              education and interdisciplinary research. Let's Shape & Elevate —
              From mentoring future leaders to enriching institutional
              excellence through innovative curriculum and impactful
              scholarship.
            </p>

            <form
              ref={FormRef}
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col space-y-7"
            >
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="Karthikeyan Rengaraj"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="Karthiramalagar@gmail.com"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Hi, I'm interested in..."
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <img
                  src={Arrow}
                  alt="arrow-up"
                  className="field-btn_arrow w-4 h-4 object-contain brightness-100"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
