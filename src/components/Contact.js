import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage(
        "Thank you for your message! We'll get back to you within 24 hours."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#495E57] to-[#F4CE14] text-white py-15 px-10 text-center rounded-t-3xl mb-0">
          <h1 className="text-5xl mb-4 text-white font-bold">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 m-0 max-w-2xl mx-auto">
            We'd love to hear from you! Get in touch with any questions,
            feedback, or special requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-b-3xl shadow-2xl overflow-hidden">
          {/* Contact Information */}
          <div className="py-12 px-10 bg-[#495E57] text-white">
            <h2 className="text-3xl text-[#F4CE14] mb-8">
              Get In Touch
            </h2>

            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontSize: "1.3rem",
                  color: "#F4CE14",
                  marginBottom: "20px",
                }}
              >
                Restaurant Information
              </h3>
              <div style={{ fontSize: "1.1rem", lineHeight: "2" }}>
                <div className="mb-4 flex items-center">
                  <span className="mr-4 text-2xl">
                    📍
                  </span>
                  <div>
                    <strong>Address:</strong>
                    <br />
                    123 Mediterranean Ave
                    <br />
                    Chicago, IL 60601
                  </div>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="mr-4 text-2xl">
                    📞
                  </span>
                  <div>
                    <strong>Phone:</strong>
                    <br />
                    (312) 555-0123
                  </div>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="mr-4 text-2xl">
                    ✉️
                  </span>
                  <div>
                    <strong>Email:</strong>
                    <br />
                    info@littlelemon.com
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl text-[#F4CE14] mb-5">
                Hours of Operation
              </h3>
              <div className="text-lg leading-relaxed">
                <div className="flex justify-between mb-2">
                  <span>Monday - Thursday:</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Friday - Saturday:</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Sunday:</span>
                  <span>12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-[#F4CE14] mb-5">
                Follow Us
              </h3>
              <div className="flex gap-5 text-3xl">
                <span className="cursor-pointer hover:scale-110 transition-transform duration-300">📘</span>
                <span className="cursor-pointer hover:scale-110 transition-transform duration-300">📷</span>
                <span className="cursor-pointer hover:scale-110 transition-transform duration-300">🐦</span>
                <span className="cursor-pointer hover:scale-110 transition-transform duration-300">⭐</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12">
            <h2 className="text-3xl text-[#495E57] mb-8">
              Send Us a Message
            </h2>

            {submitMessage && (
              <div
                style={{
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "25px",
                  border: "1px solid #c3e6cb",
                }}
              >
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block mb-2 font-bold text-[#495E57]">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-base box-border transition-colors duration-300 focus:border-[#495E57]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-bold text-[#495E57]">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-base box-border transition-colors duration-300 focus:border-[#495E57]"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block mb-2 font-bold text-[#495E57]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-base box-border transition-colors duration-300 focus:border-[#495E57]"
                    placeholder="(312) 555-0123"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-bold text-[#495E57]">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-base box-border bg-white transition-colors duration-300 focus:border-[#495E57]"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="catering">Catering Services</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="employment">Employment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-bold text-[#495E57]">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg text-base box-border resize-y font-inherit transition-colors duration-300 focus:border-[#495E57]"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-4 text-white border-none rounded-lg text-lg font-bold transition-all duration-300 shadow-lg ${
                  isSubmitting 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-[#495E57] cursor-pointer hover:bg-[#3A4B47] hover:shadow-xl"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-10 text-center">
            <h2 className="text-3xl text-[#495E57] mb-5">
              Find Us
            </h2>
            <div className="bg-gray-50 h-80 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-600">
                <div className="text-5xl mb-4">🗺️</div>
                <p className="text-xl m-0">
                  Interactive Map Coming Soon
                </p>
                <p className="text-base mt-3 mb-0">
                  123 Mediterranean Ave, Chicago, IL 60601
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
