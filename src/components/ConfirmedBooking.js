import React from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #495E57 0%, #F4CE14 100%)",
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Success Icon */}
        <div
          style={{
            backgroundColor: "#4CAF50",
            padding: "40px",
            color: "white",
          }}
        >
          <div
            style={{
              fontSize: "4rem",
              marginBottom: "20px",
            }}
          >
            ✅
          </div>
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "10px",
              color: "white",
            }}
          >
            Booking Confirmed!
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#E8F5E8",
              margin: 0,
            }}
          >
            Your table reservation has been successfully confirmed
          </p>
        </div>

        {/* Confirmation Details */}
        <div style={{ padding: "40px" }}>
          <div
            style={{
              backgroundColor: "#F8F9FA",
              padding: "30px",
              borderRadius: "15px",
              marginBottom: "30px",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#495E57",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Reservation Details
            </h2>
            
            <div style={{ marginBottom: "15px" }}>
              <strong style={{ color: "#495E57" }}>Restaurant:</strong>
              <span style={{ marginLeft: "10px", color: "#666" }}>
                Little Lemon - Chicago
              </span>
            </div>
            
            <div style={{ marginBottom: "15px" }}>
              <strong style={{ color: "#495E57" }}>Confirmation ID:</strong>
              <span style={{ marginLeft: "10px", color: "#666", fontFamily: "monospace" }}>
                LL-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </span>
            </div>
            
            <div style={{ marginBottom: "15px" }}>
              <strong style={{ color: "#495E57" }}>Status:</strong>
              <span
                style={{
                  marginLeft: "10px",
                  color: "#4CAF50",
                  fontWeight: "bold",
                }}
              >
                Confirmed ✓
              </span>
            </div>
          </div>

          {/* What's Next Section */}
          <div
            style={{
              backgroundColor: "#FFF9E6",
              padding: "25px",
              borderRadius: "15px",
              marginBottom: "30px",
              border: "2px solid #F4CE14",
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                color: "#495E57",
                marginBottom: "15px",
              }}
            >
              What's Next?
            </h3>
            <ul
              style={{
                textAlign: "left",
                color: "#666",
                lineHeight: "1.6",
                paddingLeft: "20px",
              }}
            >
              <li style={{ marginBottom: "8px" }}>
                📧 You'll receive a confirmation email shortly
              </li>
              <li style={{ marginBottom: "8px" }}>
                📱 We'll send you a reminder 24 hours before your reservation
              </li>
              <li style={{ marginBottom: "8px" }}>
                🕐 Please arrive 10-15 minutes early
              </li>
              <li style={{ marginBottom: "8px" }}>
                📞 Call us at (312) 555-0123 if you need to make changes
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div
            style={{
              backgroundColor: "#495E57",
              color: "white",
              padding: "25px",
              borderRadius: "15px",
              marginBottom: "30px",
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                color: "#F4CE14",
                marginBottom: "15px",
              }}
            >
              Little Lemon Restaurant
            </h3>
            <div style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              <div style={{ marginBottom: "8px" }}>
                📍 123 Mediterranean Ave, Chicago, IL 60601
              </div>
              <div style={{ marginBottom: "8px" }}>
                📞 (312) 555-0123
              </div>
              <div style={{ marginBottom: "8px" }}>
                ✉️ reservations@littlelemon.com
              </div>
              <div>
                🕒 Open Daily: 11:00 AM - 10:00 PM
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <button
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  backgroundColor: "#F4CE14",
                  color: "#495E57",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(244, 206, 20, 0.3)",
                }}
              >
                Back to Home
              </button>
            </Link>
            
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <button
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  backgroundColor: "#495E57",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(73, 94, 87, 0.3)",
                }}
              >
                View Menu
              </button>
            </Link>
          </div>

          {/* Thank You Message */}
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "#F8F9FA",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                color: "#495E57",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Thank you for choosing Little Lemon! We look forward to serving you
              an unforgettable Mediterranean dining experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;