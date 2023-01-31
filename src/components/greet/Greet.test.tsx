import { render, screen } from "@testing-library/react";
import { text } from "node:stream/consumers";
import Greet from "./Greet";

describe("Greet", () => {
  test("Renders Correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
  test("Renders Input Correctly", () => {
    render(<Greet />);
    const inputElement = screen.getByRole("textbox", {
      name: "Email",
    });
    expect(inputElement).toBeInTheDocument();

    const textArea = screen.getByRole("textbox", {
      name: "Description",
    });
    expect(textArea).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    const pageSubHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageHeading).toBeInTheDocument();
    expect(pageSubHeading).toBeInTheDocument();

    const labelElement = screen.getByLabelText("Description", {
      selector: "textarea",
    });
    expect(labelElement).toBeInTheDocument();

    const labelWrapper = screen.getByLabelText("I Agree");
    expect(labelWrapper).toBeInTheDocument();

    const placeHolder = screen.getByPlaceholderText("Enter Email");
    expect(placeHolder).toBeInTheDocument();

    const paragraphElement = screen.getByText("Greet Me");
    expect(paragraphElement).toBeInTheDocument();

    const displayValue = screen.getByDisplayValue("Hello Uzair");
    expect(displayValue).toBeInTheDocument();

    const closeElement = screen.getByTitle("Close");
    expect(closeElement).toBeInTheDocument();
  });
});
