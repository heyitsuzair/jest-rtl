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
  test("Renders A Count of 10 after clicking set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setBtn = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setBtn);
    const countElem = screen.getByRole("heading");
    expect(countElem).toHaveTextContent("10");
  });
  test("Elements Are Focused In Right Order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setBtn = screen.getByRole("button", {
      name: "Set",
    });
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.tab();
    expect(incrementBtn).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setBtn).toHaveFocus();
  });
});
