import Header from "./Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a DragonBall logo", () => {
      const altText = "DragonBall logo";

      render(<Header />);
      const headerImage = screen.getByAltText(altText);

      expect(headerImage).toBeInTheDocument();
    });
  });
});
