import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it receives a logo image", () => {
    test("Then it should show the image into the header", () => {
      const altText: string = "DragonBall logo";
      render(<Header />);

      const headerImage = screen.getByAltText(altText) as HTMLImageElement;

      expect(headerImage).toBeInTheDocument();
    });
  });
});
