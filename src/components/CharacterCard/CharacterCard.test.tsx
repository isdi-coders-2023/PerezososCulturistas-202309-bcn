import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import CharacterCard from "./CharacterCard";
import mainTheme from "../../styles/mainTheme";
import CharactersProviderWrapper from "../../features/characters/store/CharactersProviderWrapper";
import { characterMock } from "../../data/characters";

describe("Given a CharacterCard component ", () => {
  describe("When it receives a picture url", () => {
    test("Then it should show a character picture", () => {
      const expectedAltText = characterMock.name;

      render(
        <CharactersProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <CharacterCard character={characterMock} />
          </ThemeProvider>
        </CharactersProviderWrapper>,
      );
      const pictureImage = screen.getByAltText(expectedAltText);

      expect(pictureImage).toBeInTheDocument();
    });
  });

  describe("When it receives Goku's data", () => {
    test("Then it should show Goku into a heading", () => {
      const goku = characterMock;

      render(
        <CharactersProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <CharacterCard character={goku} />
          </ThemeProvider>
        </CharactersProviderWrapper>,
      );
      const characterName = screen.getByRole("heading", {
        name: goku.name,
      });

      expect(characterName).toBeInTheDocument();
    });
  });
});
