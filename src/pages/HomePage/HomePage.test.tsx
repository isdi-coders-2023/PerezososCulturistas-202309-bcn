import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";
import CharactersProviderWrapper from "../../features/characters/store/CharactersProviderWrapper";

describe("Given a Home page", () => {
  describe("When it renders", () => {
    test("Then it should show a heading with the text 'Characters list'", () => {
      const headingText = "Characters list";

      render(
        <CharactersProviderWrapper>
          <HomePage />
        </CharactersProviderWrapper>,
      );

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
