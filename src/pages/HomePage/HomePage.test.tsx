import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

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
