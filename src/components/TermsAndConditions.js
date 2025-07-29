import React from "react";

const TermsAndConditions = () => {
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
            Terms & Conditions
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#E8E8E8",
              margin: 0,
            }}
          >
            Please read these terms carefully before using our services
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
              Welcome to Little Lemon Restaurant. These Terms and Conditions
              ("Terms") govern your use of our website and services. By
              accessing our website or making a reservation, you agree to be
              bound by these Terms.
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
              Reservation Policy
            </h2>
            <div style={{ marginLeft: "20px" }}>
              <h3
                style={{
                  fontSize: "1.2rem",
                  color: "#495E57",
                  marginBottom: "10px",
                }}
              >
                Making Reservations
              </h3>
              <ul
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                <li>Reservations can be made online or by phone</li>
                <li>All reservations are subject to availability</li>
                <li>We recommend booking at least 24 hours in advance</li>
                <li>Large parties (8+ guests) require special arrangements</li>
              </ul>

              <h3
                style={{
                  fontSize: "1.2rem",
                  color: "#495E57",
                  marginBottom: "10px",
                }}
              >
                Cancellation Policy
              </h3>
              <ul
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                <li>Cancellations must be made at least 2 hours in advance</li>
                <li>No-shows may be subject to a cancellation fee</li>
                <li>We reserve the right to release tables after 15 minutes</li>
                <li>Special events may have different cancellation policies</li>
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
              Restaurant Policies
            </h2>
            <div style={{ marginLeft: "20px" }}>
              <h3
                style={{
                  fontSize: "1.2rem",
                  color: "#495E57",
                  marginBottom: "10px",
                }}
              >
                Dress Code
              </h3>
              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                }}
              >
                We maintain a smart casual dress code. We reserve the right to
                refuse service to guests who do not meet our dress standards.
              </p>

              <h3
                style={{
                  fontSize: "1.2rem",
                  color: "#495E57",
                  marginBottom: "10px",
                }}
              >
                Age Policy
              </h3>
              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                }}
              >
                Children are welcome. High chairs and children's menus are
                available upon request. We ask that parents supervise their
                children at all times.
              </p>

              <h3
                style={{
                  fontSize: "1.2rem",
                  color: "#495E57",
                  marginBottom: "10px",
                }}
              >
                Special Dietary Requirements
              </h3>
              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                }}
              >
                Please inform us of any allergies or dietary restrictions when
                making your reservation. While we take precautions, we cannot
                guarantee allergen-free preparation.
              </p>
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
              Payment Terms
            </h2>
            <ul
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginLeft: "20px",
              }}
            >
              <li>We accept cash and all major credit cards</li>
              <li>Gratuity is not included in menu prices</li>
              <li>For large parties, an 18% service charge may apply</li>
              <li>Split bills are accommodated for parties up to 6 guests</li>
              <li>We do not accept personal checks</li>
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
              Liability and Disclaimers
            </h2>
            <div style={{ marginLeft: "20px" }}>
              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                }}
              >
                Little Lemon Restaurant is not liable for:
              </p>
              <ul
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                <li>Loss or damage to personal property</li>
                <li>Allergic reactions despite disclosed ingredients</li>
                <li>Service interruptions due to circumstances beyond our control</li>
                <li>Menu changes or item availability</li>
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
              Website Use
            </h2>
            <div style={{ marginLeft: "20px" }}>
              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                }}
              >
                By using our website, you agree to:
              </p>
              <ul
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                <li>Provide accurate information when making reservations</li>
                <li>Not use the website for any unlawful purposes</li>
                <li>Respect our intellectual property rights</li>
                <li>Not attempt to disrupt or damage our systems</li>
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
              Changes to Terms
            </h2>
            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginLeft: "20px",
              }}
            >
              We reserve the right to modify these Terms at any time. Changes
              will be posted on our website with an updated effective date.
              Continued use of our services constitutes acceptance of the
              modified Terms.
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
              Contact Information
            </h2>
            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginLeft: "20px",
              }}
            >
              If you have any questions about these Terms and Conditions,
              please contact us:
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
                ✉️ legal@littlelemon.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
