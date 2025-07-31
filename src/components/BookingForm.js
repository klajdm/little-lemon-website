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
    <div className="min-h-screen bg-gradient-to-br from-[#F4CE14] to-[#495E57] py-10 px-5 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-10 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-[#495E57] mb-3 font-bold">
            Reserve a Table
          </h1>
          <p className="text-gray-600 text-lg">
            Book your perfect dining experience at Little Lemon
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-none">
          {errors.submit && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-5 border border-red-200">
              {errors.submit}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Name Field */}
            <div>
              <label
                htmlFor="book-name"
                className="block mb-2 font-bold text-[#495E57]"
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
                className={`w-full p-3 border-2 rounded-lg text-base transition-colors duration-300 box-border min-w-0 ${
                  errors.name ? "border-red-700" : "border-gray-300"
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="text-red-700 text-sm mt-1 block">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="book-email"
                className="block mb-2 font-bold text-[#495E57]"
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
                className={`w-full p-3 border-2 rounded-lg text-base transition-colors duration-300 box-border min-w-0 ${
                  errors.email ? "border-red-700" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-700 text-sm mt-1 block">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Phone Field */}
          <div className="mb-5">
            <label
              htmlFor="book-phone"
              className="block mb-2 font-bold text-[#495E57]"
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
              className={`w-full p-3 border-2 rounded-lg text-base transition-colors duration-300 box-border min-w-0 ${
                errors.phone ? "border-red-700" : "border-gray-300"
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <span className="text-red-700 text-sm mt-1 block">
                {errors.phone}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Date Field */}
            <div>
              <label
                htmlFor="book-date"
                className="block mb-2 font-bold text-[#495E57]"
              >
                Choose Date *
              </label>
              <input
                id="book-date"
                type="date"
                value={date}
                min={today}
                onChange={(e) => handleChange(e.target.value)}
                className={`w-full p-3 border-2 rounded-lg text-base transition-colors duration-300 box-border min-w-0 ${
                  errors.date ? "border-red-700" : "border-gray-300"
                }`}
              />
              {errors.date && (
                <span className="text-red-700 text-sm mt-1 block">
                  {errors.date}
                </span>
              )}
            </div>

            {/* Time Field */}
            <div>
              <label
                htmlFor="book-time"
                className="block mb-2 font-bold text-[#495E57]"
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
                className={`w-full p-3 border-2 rounded-lg text-base transition-colors duration-300 box-border bg-white min-w-0 ${
                  errors.times ? "border-red-700" : "border-gray-300"
                }`}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTime) => (
                  <option key={availableTime} value={availableTime}>
                    {availableTime}
                  </option>
                ))}
              </select>
              {errors.times && (
                <span className="text-red-700 text-sm mt-1 block">
                  {errors.times}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Guests Field */}
            <div>
              <label
                htmlFor="book-guests"
                className="block mb-2 font-bold text-[#495E57]"
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
                className={`w-full p-3 border-2 rounded-lg text-base transition-colors duration-300 box-border min-w-0 ${
                  errors.guests ? "border-red-700" : "border-gray-300"
                }`}
                placeholder="1-10 guests"
              />
              {errors.guests && (
                <span className="text-red-700 text-sm mt-1 block">
                  {errors.guests}
                </span>
              )}
            </div>

            {/* Occasion Field */}
            <div>
              <label
                htmlFor="book-occasion"
                className="block mb-2 font-bold text-[#495E57]"
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
                className={`w-full p-3 border-2 rounded-lg text-base transition-colors duration-300 box-border bg-white min-w-0 ${
                  errors.occasion ? "border-red-700" : "border-gray-300"
                }`}
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
                <span className="text-red-700 text-sm mt-1 block">
                  {errors.occasion}
                </span>
              )}
            </div>
          </div>

          {/* Special Requests Field */}
          <div className="mb-8">
            <label
              htmlFor="book-requests"
              className="block mb-2 font-bold text-[#495E57]"
            >
              Special Requests (Optional)
            </label>
            <textarea
              id="book-requests"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              rows="3"
              className="w-full p-3 border-2 border-gray-300 rounded-lg text-base transition-colors duration-300 box-border resize-y font-inherit min-w-0"
              placeholder="Any dietary restrictions, seating preferences, or special requests..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-4 text-white border-none rounded-lg text-lg font-bold transition-all duration-300 shadow-lg ${
              isSubmitting 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-[#495E57] cursor-pointer hover:bg-[#3A4B47] hover:shadow-xl"
            }`}
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
