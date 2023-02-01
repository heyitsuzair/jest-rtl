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

  test("Renders Login Button", () => {
    render(<Skills skills={skills} />);
    const login = screen.getByRole("button", {
      name: "Login",
    });

    expect(login).toBeInTheDocument();
  });
  test("Doesnot Renders Login Button", () => {
    render(<Skills skills={skills} />);
    const startLearning = screen.queryByRole("button", {
      name: "Start Learning",
    });

    expect(startLearning).not.toBeInTheDocument();
  });
  test("Start Learning Button Is Eventually Displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearning = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );

    expect(startLearning).toBeInTheDocument();
  });
});
