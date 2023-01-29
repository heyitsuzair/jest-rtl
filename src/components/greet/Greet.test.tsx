import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet Renders Correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet Renders Correctly With Name", () => {
  render(<Greet name="Uzair" />);
  const textElement = screen.getByText("Hello Uzair");
  expect(textElement).toBeInTheDocument();
});
