import React from "react";

const PrivacyPolicy = () => {
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
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #495E57 0%, #F4CE14 100%)",
            color: "white",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "10px",
              color: "white",
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#E8E8E8",
              margin: 0,
            }}
          >
            Your privacy is important to us at Little Lemon
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: "40px" }}>
          <div style={{ marginBottom: "30px" }}>
            <p
              style={{
                fontSize: "1rem",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#495E57",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              Little Lemon Restaurant ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or make a reservation.
            </p>
          </div>

          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#495E57",
                marginBottom: "15px",
                borderBottom: "2px solid #F4CE14",
                paddingBottom: "5px",
              }}
            >
              Information We Collect
            </h2>
            <div style={{ marginLeft: "20px" }}>
              <h3
                style={{
                  fontSize: "1.2rem",
                  color: "#495E57",
                  marginBottom: "10px",
                }}
              >
                Personal Information
              </h3>
              <ul
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                <li>Name and contact information (email, phone number)</li>
                <li>Reservation details and dining preferences</li>
                <li>Special dietary requirements or requests</li>
                <li>Payment information (processed securely)</li>
              </ul>

              <h3
                style={{
                  fontSize: "1.2rem",
                  color: "#495E57",
                  marginBottom: "10px",
                }}
              >
                Automatically Collected Information
              </h3>
              <ul
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                <li>IP address and browser information</li>
                <li>Website usage patterns and preferences</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#495E57",
                marginBottom: "15px",
                borderBottom: "2px solid #F4CE14",
                paddingBottom: "5px",
              }}
            >
              How We Use Your Information
            </h2>
            <ul
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginLeft: "20px",
              }}
            >
              <li>Process and manage your reservations</li>
              <li>Send confirmation emails and reservation reminders</li>
              <li>Improve our services and customer experience</li>
              <li>Communicate special offers and promotions (with consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#495E57",
                marginBottom: "15px",
                borderBottom: "2px solid #F4CE14",
                paddingBottom: "5px",
              }}
            >
              Information Sharing
            </h2>
            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginLeft: "20px",
              }}
            >
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginLeft: "40px",
              }}
            >
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>With trusted service providers who assist our operations</li>
              <li>To protect our rights and safety</li>
            </ul>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#495E57",
                marginBottom: "15px",
                borderBottom: "2px solid #F4CE14",
                paddingBottom: "5px",
              }}
            >
              Data Security
            </h2>
            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginLeft: "20px",
              }}
            >
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#495E57",
                marginBottom: "15px",
                borderBottom: "2px solid #F4CE14",
                paddingBottom: "5px",
              }}
            >
              Your Rights
            </h2>
            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginLeft: "20px",
                marginBottom: "10px",
              }}
            >
              You have the right to:
            </p>
            <ul
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginLeft: "40px",
              }}
            >
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>File a complaint with regulatory authorities</li>
            </ul>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#495E57",
                marginBottom: "15px",
                borderBottom: "2px solid #F4CE14",
                paddingBottom: "5px",
              }}
            >
              Contact Us
            </h2>
            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginLeft: "20px",
              }}
            >
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <div
              style={{
                backgroundColor: "#F8F9FA",
                padding: "20px",
                borderRadius: "10px",
                marginLeft: "20px",
                marginTop: "15px",
              }}
            >
              <p style={{ margin: "5px 0", color: "#495E57" }}>
                <strong>Little Lemon Restaurant</strong>
              </p>
              <p style={{ margin: "5px 0", color: "#666" }}>
                📍 123 Mediterranean Ave, Chicago, IL 60601
              </p>
              <p style={{ margin: "5px 0", color: "#666" }}>
                📞 (312) 555-0123
              </p>
              <p style={{ margin: "5px 0", color: "#666" }}>
                ✉️ privacy@littlelemon.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
