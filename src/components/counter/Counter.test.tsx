import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("counter", () => {
  test("Renders Counter Correctly", () => {
    render(<Counter />);
    const countElem = screen.getByRole("heading");
    expect(countElem).toBeInTheDocument();

    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementBtn).toBeInTheDocument();
  });

  test("Renders A Count Of 0", () => {
    render(<Counter />);
    const countElem = screen.getByRole("heading");
    expect(countElem).toHaveTextContent("0");
  });
  test("Renders A Count Of 1 After Clicking Increment Button", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementBtn);
    const countElem = screen.getByRole("heading");
    expect(countElem).toHaveTextContent("1");
  });
  test("Renders A Count Of 2 After Double Clicking Increment Button", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.dblClick(incrementBtn);
    const countElem = screen.getByRole("heading");
    expect(countElem).toHaveTextContent("2");
  });
});
