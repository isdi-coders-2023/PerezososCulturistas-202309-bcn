import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import "@testing-library/jest-dom";

describe("Given a Home page", () => {
  describe("When it is called", () => {
    test("Then it should show a heading with the text 'CHARACTERS LIST'", () => {
      const headingText = "CHARACTERS LIST";

      render(<HomePage />);

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
