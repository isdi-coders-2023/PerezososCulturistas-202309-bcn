import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharactersList from "./CharactersList";
import CharactersProviderWrapper from "../../features/characters/store/CharactersProviderWrapper";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a CharactersList component", () => {
  describe("When it is called with a list of characters", () => {
    test("Then it should show a list characters with the title 'characters-list'", () => {
      const expectedTitle = "characters-list";

      render(
        <CharactersProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <CharactersList />
          </ThemeProvider>
        </CharactersProviderWrapper>,
      );

      const title = screen.getByTitle(expectedTitle);

      expect(title).toBeInTheDocument();
    });
  });
});
