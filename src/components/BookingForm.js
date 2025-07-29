import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  // Validation states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get today's date for minimum date validation
  const today = new Date().toISOString().split("T")[0];

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex =
      /^[+]?[1-9][\d]{0,2}[\s\-.]?[(]?[\d]{1,3}[)]?[\s\-.]?[\d]{3,4}[\s\-.]?[\d]{3,4}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Date validation
    if (!date) {
      newErrors.date = "Date is required";
    } else if (date < today) {
      newErrors.date = "Please select a future date";
    }

    // Time validation
    if (!times) {
      newErrors.times = "Please select a time";
    }

    // Guests validation
    if (!guests) {
      newErrors.guests = "Number of guests is required";
    } else if (parseInt(guests) < 1 || parseInt(guests) > 10) {
      newErrors.guests = "Number of guests must be between 1 and 10";
    }

    // Occasion validation
    if (!occasion) {
      newErrors.occasion = "Please select an occasion";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      const formData = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        date,
        time: times,
        guests: parseInt(guests),
        occasion,
        specialRequests: specialRequests.trim(),
      };

      try {
        await props.submitForm(formData);
        // Reset form on successful submission
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setTimes("");
        setGuests("");
        setOccasion("");
        setSpecialRequests("");
        setErrors({});
      } catch (error) {
        setErrors({
          submit: "Failed to submit reservation. Please try again.",
        });
      }
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
    // Clear date error when user selects a date
    if (errors.date) {
      setErrors((prev) => ({ ...prev, date: "" }));
    }
  };

  const handleInputChange = (field, value) => {
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F4CE14 0%, #495E57 100%)",
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
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#495E57",
            color: "white",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "10px",
              color: "#F4CE14",
            }}
          >
            Reserve Your Table
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#E8E8E8",
              margin: 0,
            }}
          >
            Book your perfect dining experience at Little Lemon
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{ padding: "40px", maxWidth: "none" }}
        >
          {errors.submit && (
            <div
              style={{
                backgroundColor: "#ffebee",
                color: "#c62828",
                padding: "12px",
                borderRadius: "8px",
                marginBottom: "20px",
                border: "1px solid #ffcdd2",
              }}
            >
              {errors.submit}
            </div>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="book-name"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#495E57",
                }}
              >
                Full Name *
              </label>
              <input
                id="book-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  handleInputChange("name", e.target.value);
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: errors.name ? "2px solid #c62828" : "2px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease",
                  boxSizing: "border-box",
                  minWidth: "0",
                }}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span
                  style={{
                    color: "#c62828",
                    fontSize: "0.875rem",
                    marginTop: "4px",
                    display: "block",
                  }}
                >
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="book-email"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#495E57",
                }}
              >
                Email Address *
              </label>
              <input
                id="book-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleInputChange("email", e.target.value);
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: errors.email ? "2px solid #c62828" : "2px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease",
                  boxSizing: "border-box",
                  minWidth: "0",
                }}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span
                  style={{
                    color: "#c62828",
                    fontSize: "0.875rem",
                    marginTop: "4px",
                    display: "block",
                  }}
                >
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Phone Field */}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="book-phone"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#495E57",
              }}
            >
              Phone Number *
            </label>
            <input
              id="book-phone"
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                handleInputChange("phone", e.target.value);
              }}
              style={{
                width: "100%",
                padding: "12px",
                border: errors.phone ? "2px solid #c62828" : "2px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                transition: "border-color 0.3s ease",
                boxSizing: "border-box",
                minWidth: "0",
              }}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <span
                style={{
                  color: "#c62828",
                  fontSize: "0.875rem",
                  marginTop: "4px",
                  display: "block",
                }}
              >
                {errors.phone}
              </span>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            {/* Date Field */}
            <div>
              <label
                htmlFor="book-date"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#495E57",
                }}
              >
                Choose Date *
              </label>
              <input
                id="book-date"
                type="date"
                value={date}
                min={today}
                onChange={(e) => handleChange(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: errors.date ? "2px solid #c62828" : "2px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease",
                  boxSizing: "border-box",
                  minWidth: "0",
                }}
              />
              {errors.date && (
                <span
                  style={{
                    color: "#c62828",
                    fontSize: "0.875rem",
                    marginTop: "4px",
                    display: "block",
                  }}
                >
                  {errors.date}
                </span>
              )}
            </div>

            {/* Time Field */}
            <div>
              <label
                htmlFor="book-time"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#495E57",
                }}
              >
                Choose Time *
              </label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => {
                  setTimes(e.target.value);
                  handleInputChange("times", e.target.value);
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: errors.times ? "2px solid #c62828" : "2px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease",
                  boxSizing: "border-box",
                  backgroundColor: "white",
                  minWidth: "0",
                }}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTime) => (
                  <option key={availableTime} value={availableTime}>
                    {availableTime}
                  </option>
                ))}
              </select>
              {errors.times && (
                <span
                  style={{
                    color: "#c62828",
                    fontSize: "0.875rem",
                    marginTop: "4px",
                    display: "block",
                  }}
                >
                  {errors.times}
                </span>
              )}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            {/* Guests Field */}
            <div>
              <label
                htmlFor="book-guests"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#495E57",
                }}
              >
                Number of Guests *
              </label>
              <input
                id="book-guests"
                type="number"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                  handleInputChange("guests", e.target.value);
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: errors.guests
                    ? "2px solid #c62828"
                    : "2px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease",
                  boxSizing: "border-box",
                  minWidth: "0",
                }}
                placeholder="1-10 guests"
              />
              {errors.guests && (
                <span
                  style={{
                    color: "#c62828",
                    fontSize: "0.875rem",
                    marginTop: "4px",
                    display: "block",
                  }}
                >
                  {errors.guests}
                </span>
              )}
            </div>

            {/* Occasion Field */}
            <div>
              <label
                htmlFor="book-occasion"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#495E57",
                }}
              >
                Occasion *
              </label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => {
                  setOccasion(e.target.value);
                  handleInputChange("occasion", e.target.value);
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: errors.occasion
                    ? "2px solid #c62828"
                    : "2px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease",
                  boxSizing: "border-box",
                  backgroundColor: "white",
                  minWidth: "0",
                }}
              >
                <option value="">Select an Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Date Night">Date Night</option>
                <option value="Business Dinner">Business Dinner</option>
                <option value="Family Gathering">Family Gathering</option>
                <option value="Other">Other</option>
              </select>
              {errors.occasion && (
                <span
                  style={{
                    color: "#c62828",
                    fontSize: "0.875rem",
                    marginTop: "4px",
                    display: "block",
                  }}
                >
                  {errors.occasion}
                </span>
              )}
            </div>
          </div>

          {/* Special Requests Field */}
          <div style={{ marginBottom: "30px" }}>
            <label
              htmlFor="book-requests"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#495E57",
              }}
            >
              Special Requests (Optional)
            </label>
            <textarea
              id="book-requests"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              rows="3"
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                transition: "border-color 0.3s ease",
                boxSizing: "border-box",
                resize: "vertical",
                fontFamily: "inherit",
                minWidth: "0",
              }}
              placeholder="Any dietary restrictions, seating preferences, or special requests..."
            />
          </div>

          {/* Submit Button */}
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
            aria-label="Submit reservation form"
          >
            {isSubmitting ? "Processing..." : "Make Your Reservation"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
