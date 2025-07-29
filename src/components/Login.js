import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login attempt:", {
        email: formData.email,
        password: formData.password,
      });
      alert("Login functionality would be implemented here!");
    } else {
      console.log("Registration attempt:", formData);
      alert("Registration functionality would be implemented here!");
    }
  };

  return (
    <main>
      <section
        style={{
          padding: "2rem",
          maxWidth: "500px",
          margin: "2rem auto",
          backgroundColor: "#EDEFEE",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1>{isLogin ? "Login" : "Create Account"}</h1>
          <p style={{ color: "#495E57" }}>
            {isLogin
              ? "Welcome back to Little Lemon!"
              : "Join the Little Lemon family!"}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ maxWidth: "none" }}>
          {!isLogin && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div>
                <label
                  htmlFor="firstName"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                  }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required={!isLogin}
                  style={{
                    width: "95%",
                    padding: "0.75rem",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required={!isLogin}
                  style={{
                    width: "95%",
                    padding: "0.75rem",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "1rem",
                  }}
                />
              </div>
            </div>
          )}

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            />
          </div>

          {!isLogin && (
            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="confirmPassword"
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required={!isLogin}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "1rem",
                }}
              />
            </div>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#F4CE14",
              border: "none",
              padding: "1rem",
              borderRadius: "5px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              marginBottom: "1rem",
            }}
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <div style={{ textAlign: "center" }}>
          <p style={{ margin: "1rem 0" }}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              backgroundColor: "transparent",
              border: "2px solid #495E57",
              color: "#495E57",
              padding: "0.75rem 1.5rem",
              borderRadius: "5px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {isLogin ? "Create Account" : "Login Instead"}
          </button>
        </div>

        {isLogin && (
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <button
              type="button"
              onClick={() =>
                alert("Password reset functionality would be implemented here!")
              }
              style={{
                color: "#495E57",
                textDecoration: "underline",
                fontSize: "0.9rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Forgot your password?
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Login;
