import { screen, render } from "@testing-library/react";
import Skills from "./Skills";

describe("skills", () => {
  const skills = ["REACT", "NODE", "EXPRESS"];
  test("Renders Correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("Renders List Of Skills", () => {
    render(<Skills skills={skills} />);

    const listItemElement = screen.getAllByRole("listitem");

    expect(listItemElement).toHaveLength(skills.length);
  });
});
