import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import BookingForm from "./BookingForm";

// Mock props
const mockProps = {
  availableTimes: {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  },
  dispatch: jest.fn(),
  submitForm: jest.fn(),
};

// Helper function to fill out the form with valid data
const fillValidForm = async (user) => {
  await user.type(screen.getByLabelText(/full name/i), "John Doe");
  await user.type(screen.getByLabelText(/email/i), "john.doe@example.com");
  await user.type(screen.getByLabelText(/phone/i), "(312) 555-1234");

  const dateInput = screen.getByLabelText(/choose date/i);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split("T")[0];
  await user.type(dateInput, tomorrowString);

  await user.selectOptions(screen.getByLabelText(/choose time/i), "18:00");
  await user.type(screen.getByLabelText(/number of guests/i), "4");
  await user.selectOptions(screen.getByLabelText(/occasion/i), "Birthday");
};

describe("BookingForm Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    test("renders all form fields", () => {
      render(<BookingForm {...mockProps} />);

      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/special requests/i)).toBeInTheDocument();
    });

    test("renders submit button", () => {
      render(<BookingForm {...mockProps} />);

      expect(
        screen.getByRole("button", { name: /make your reservation/i })
      ).toBeInTheDocument();
    });

    test("renders available times in select dropdown", () => {
      render(<BookingForm {...mockProps} />);

      const timeSelect = screen.getByLabelText(/choose time/i);
      mockProps.availableTimes.availableTimes.forEach((time) => {
        expect(screen.getByDisplayValue(time)).toBeInTheDocument();
      });
    });

    test("renders occasion options", () => {
      render(<BookingForm {...mockProps} />);

      const occasionSelect = screen.getByLabelText(/occasion/i);
      expect(screen.getByDisplayValue("Birthday")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Anniversary")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Date Night")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Business Dinner")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Family Gathering")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Other")).toBeInTheDocument();
    });
  });

  describe("Form Validation", () => {
    test("shows error when name is empty", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(screen.getByText("Name is required")).toBeInTheDocument();
    });

    test("shows error when name is too short", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      await user.type(screen.getByLabelText(/full name/i), "J");
      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(
        screen.getByText("Name must be at least 2 characters")
      ).toBeInTheDocument();
    });

    test("shows error when email is empty", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(screen.getByText("Email is required")).toBeInTheDocument();
    });

    test("shows error when email format is invalid", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      await user.type(screen.getByLabelText(/email/i), "invalid-email");
      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(
        screen.getByText("Please enter a valid email address")
      ).toBeInTheDocument();
    });

    test("accepts valid email formats", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      const validEmails = [
        "test@example.com",
        "user.name@domain.co.uk",
        "user+tag@example.org",
      ];

      for (const email of validEmails) {
        const emailInput = screen.getByLabelText(/email/i);
        await user.clear(emailInput);
        await user.type(emailInput, email);
        await user.type(screen.getByLabelText(/full name/i), "John Doe");

        const submitButton = screen.getByRole("button", {
          name: /make your reservation/i,
        });
        await user.click(submitButton);

        expect(
          screen.queryByText("Please enter a valid email address")
        ).not.toBeInTheDocument();
      }
    });

    test("shows error when phone is empty", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(screen.getByText("Phone number is required")).toBeInTheDocument();
    });

    test("shows error when phone format is invalid", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      await user.type(screen.getByLabelText(/phone/i), "123");
      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(
        screen.getByText("Please enter a valid phone number")
      ).toBeInTheDocument();
    });

    test("accepts valid phone formats", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      const validPhones = [
        "(312) 555-1234",
        "312-555-1234",
        "312.555.1234",
        "3125551234",
        "+1 312 555 1234",
      ];

      for (const phone of validPhones) {
        const phoneInput = screen.getByLabelText(/phone/i);
        await user.clear(phoneInput);
        await user.type(phoneInput, phone);
        await user.type(screen.getByLabelText(/full name/i), "John Doe");

        const submitButton = screen.getByRole("button", {
          name: /make your reservation/i,
        });
        await user.click(submitButton);

        expect(
          screen.queryByText("Please enter a valid phone number")
        ).not.toBeInTheDocument();
      }
    });

    test("shows error when date is empty", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(screen.getByText("Date is required")).toBeInTheDocument();
    });

    test("shows error when date is in the past", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toISOString().split("T")[0];

      await user.type(screen.getByLabelText(/choose date/i), yesterdayString);
      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(
        screen.getByText("Please select a future date")
      ).toBeInTheDocument();
    });

    test("shows error when time is not selected", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(screen.getByText("Please select a time")).toBeInTheDocument();
    });

    test("shows error when guests number is empty", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(
        screen.getByText("Number of guests is required")
      ).toBeInTheDocument();
    });

    test("shows error when guests number is out of range", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      // Test below minimum
      await user.type(screen.getByLabelText(/number of guests/i), "0");
      let submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(
        screen.getByText("Number of guests must be between 1 and 10")
      ).toBeInTheDocument();

      // Clear and test above maximum
      await user.clear(screen.getByLabelText(/number of guests/i));
      await user.type(screen.getByLabelText(/number of guests/i), "11");
      submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(
        screen.getByText("Number of guests must be between 1 and 10")
      ).toBeInTheDocument();
    });

    test("shows error when occasion is not selected", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(screen.getByText("Please select an occasion")).toBeInTheDocument();
    });
  });

  describe("Error Clearing", () => {
    test("clears name error when user starts typing", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      // Trigger name error
      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);
      expect(screen.getByText("Name is required")).toBeInTheDocument();

      // Start typing in name field
      await user.type(screen.getByLabelText(/full name/i), "J");
      expect(screen.queryByText("Name is required")).not.toBeInTheDocument();
    });

    test("clears date error when user selects a date", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      // Trigger date error
      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);
      expect(screen.getByText("Date is required")).toBeInTheDocument();

      // Select a date
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowString = tomorrow.toISOString().split("T")[0];
      await user.type(screen.getByLabelText(/choose date/i), tomorrowString);

      expect(screen.queryByText("Date is required")).not.toBeInTheDocument();
    });
  });

  describe("Form Submission", () => {
    test("calls submitForm with correct data when form is valid", async () => {
      const user = userEvent.setup();
      mockProps.submitForm.mockResolvedValue();
      render(<BookingForm {...mockProps} />);

      await fillValidForm(user);

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(mockProps.submitForm).toHaveBeenCalledWith({
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "(312) 555-1234",
          date: expect.any(String),
          time: "18:00",
          guests: 4,
          occasion: "Birthday",
          specialRequests: "",
        });
      });
    });

    test("includes special requests in submission data", async () => {
      const user = userEvent.setup();
      mockProps.submitForm.mockResolvedValue();
      render(<BookingForm {...mockProps} />);

      await fillValidForm(user);
      await user.type(
        screen.getByLabelText(/special requests/i),
        "Window seat please"
      );

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(mockProps.submitForm).toHaveBeenCalledWith(
          expect.objectContaining({
            specialRequests: "Window seat please",
          })
        );
      });
    });

    test("shows loading state during submission", async () => {
      const user = userEvent.setup();
      let resolveSubmit;
      mockProps.submitForm.mockReturnValue(
        new Promise((resolve) => {
          resolveSubmit = resolve;
        })
      );

      render(<BookingForm {...mockProps} />);

      await fillValidForm(user);

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      expect(screen.getByText("Processing...")).toBeInTheDocument();
      expect(submitButton).toBeDisabled();

      resolveSubmit();
      await waitFor(() => {
        expect(screen.getByText("Make Your Reservation")).toBeInTheDocument();
      });
    });

    test("shows error message when submission fails", async () => {
      const user = userEvent.setup();
      mockProps.submitForm.mockRejectedValue(new Error("Network error"));
      render(<BookingForm {...mockProps} />);

      await fillValidForm(user);

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText("Failed to submit reservation. Please try again.")
        ).toBeInTheDocument();
      });
    });

    test("resets form after successful submission", async () => {
      const user = userEvent.setup();
      mockProps.submitForm.mockResolvedValue();
      render(<BookingForm {...mockProps} />);

      await fillValidForm(user);

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      await user.click(submitButton);

      // Wait for form to be reset (using one key field as indicator)
      await waitFor(() => {
        expect(screen.getByLabelText(/full name/i)).toHaveValue("");
      });

      // Then verify all fields are reset
      expect(screen.getByLabelText(/email/i)).toHaveValue("");
      expect(screen.getByLabelText(/phone/i)).toHaveValue("");
      expect(screen.getByLabelText(/choose date/i)).toHaveValue("");
      expect(screen.getByLabelText(/choose time/i)).toHaveValue("");
      expect(screen.getByLabelText(/number of guests/i)).toHaveValue("");
      expect(screen.getByLabelText(/occasion/i)).toHaveValue("");
      expect(screen.getByLabelText(/special requests/i)).toHaveValue("");
    });

    test("calls dispatch when date changes", async () => {
      const user = userEvent.setup();
      render(<BookingForm {...mockProps} />);

      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowString = tomorrow.toISOString().split("T")[0];

      await user.type(screen.getByLabelText(/choose date/i), tomorrowString);

      expect(mockProps.dispatch).toHaveBeenCalledWith(tomorrowString);
    });
  });

  describe("Accessibility", () => {
    test("has proper labels for all form fields", () => {
      render(<BookingForm {...mockProps} />);

      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/special requests/i)).toBeInTheDocument();
    });

    test("submit button has proper aria-label", () => {
      render(<BookingForm {...mockProps} />);

      const submitButton = screen.getByRole("button", {
        name: /submit reservation form/i,
      });
      expect(submitButton).toBeInTheDocument();
    });

    test("required fields are marked with asterisk", () => {
      render(<BookingForm {...mockProps} />);

      expect(screen.getByText("Full Name *")).toBeInTheDocument();
      expect(screen.getByText("Email Address *")).toBeInTheDocument();
      expect(screen.getByText("Phone Number *")).toBeInTheDocument();
      expect(screen.getByText("Choose Date *")).toBeInTheDocument();
      expect(screen.getByText("Choose Time *")).toBeInTheDocument();
      expect(screen.getByText("Number of Guests *")).toBeInTheDocument();
      expect(screen.getByText("Occasion *")).toBeInTheDocument();
    });
  });
});
