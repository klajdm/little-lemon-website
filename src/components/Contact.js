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
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FBFBFB",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #495E57 0%, #F4CE14 100%)",
            color: "white",
            padding: "60px 40px",
            textAlign: "center",
            borderRadius: "20px 20px 0 0",
            marginBottom: "0",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "15px",
              color: "white",
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#E8E8E8",
              margin: 0,
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            We'd love to hear from you! Get in touch with any questions,
            feedback, or special requests.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            backgroundColor: "white",
            borderRadius: "0 0 20px 20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          {/* Contact Information */}
          <div
            style={{
              padding: "50px 40px",
              backgroundColor: "#495E57",
              color: "white",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                color: "#F4CE14",
                marginBottom: "30px",
              }}
            >
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
                <div
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginRight: "15px", fontSize: "1.5rem" }}>
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
                <div
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginRight: "15px", fontSize: "1.5rem" }}>
                    📞
                  </span>
                  <div>
                    <strong>Phone:</strong>
                    <br />
                    (312) 555-0123
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginRight: "15px", fontSize: "1.5rem" }}>
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

            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontSize: "1.3rem",
                  color: "#F4CE14",
                  marginBottom: "20px",
                }}
              >
                Hours of Operation
              </h3>
              <div style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span>Monday - Thursday:</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span>Friday - Saturday:</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span>Sunday:</span>
                  <span>12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  color: "#F4CE14",
                  marginBottom: "20px",
                }}
              >
                Follow Us
              </h3>
              <div style={{ display: "flex", gap: "20px", fontSize: "2rem" }}>
                <span style={{ cursor: "pointer" }}>📘</span>
                <span style={{ cursor: "pointer" }}>📷</span>
                <span style={{ cursor: "pointer" }}>🐦</span>
                <span style={{ cursor: "pointer" }}>⭐</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ padding: "50px 40px" }}>
            <h2
              style={{
                fontSize: "2rem",
                color: "#495E57",
                marginBottom: "30px",
              }}
            >
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

            <form onSubmit={handleSubmit} style={{ maxWidth: "none" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "bold",
                      color: "#495E57",
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #ddd",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      boxSizing: "border-box",
                    }}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "bold",
                      color: "#495E57",
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #ddd",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      boxSizing: "border-box",
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "bold",
                      color: "#495E57",
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #ddd",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      boxSizing: "border-box",
                    }}
                    placeholder="(312) 555-0123"
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "bold",
                      color: "#495E57",
                    }}
                  >
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #ddd",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      boxSizing: "border-box",
                      backgroundColor: "white",
                    }}
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

              <div style={{ marginBottom: "25px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "bold",
                    color: "#495E57",
                  }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: isSubmitting ? "#ccc" : "#495E57",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(73, 94, 87, 0.3)",
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div
          style={{
            marginTop: "40px",
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                color: "#495E57",
                marginBottom: "20px",
              }}
            >
              Find Us
            </h2>
            <div
              style={{
                backgroundColor: "#F8F9FA",
                height: "300px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px dashed #ddd",
              }}
            >
              <div style={{ textAlign: "center", color: "#666" }}>
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>🗺️</div>
                <p style={{ fontSize: "1.2rem", margin: 0 }}>
                  Interactive Map Coming Soon
                </p>
                <p style={{ fontSize: "1rem", margin: "10px 0 0 0" }}>
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
