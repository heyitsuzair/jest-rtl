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
  });
});
