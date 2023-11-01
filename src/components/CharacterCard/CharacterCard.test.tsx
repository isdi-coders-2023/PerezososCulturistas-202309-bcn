import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { characterMock } from "../../mocks/characters";
import CharacterCard from "./CharacterCard";
import mainTheme from "../../styles/mainTheme";

describe("Given a CharacterCard component ", () => {
  describe("When it receives a picture url", () => {
    test("Then it should show a character picture", () => {
      const expectedAltText = characterMock.name;

      render(
        <ThemeProvider theme={mainTheme}>
          <CharacterCard character={characterMock} />
        </ThemeProvider>,
      );
      const pictureImage = screen.getByAltText(expectedAltText);

      expect(pictureImage).toBeInTheDocument();
    });
  });

  describe("When it receives Goku's data", () => {
    test("Then it should show Goku into a heading", () => {
      const goku = characterMock;

      render(
        <ThemeProvider theme={mainTheme}>
          <CharacterCard character={goku} />
        </ThemeProvider>,
      );
      const characterName = screen.getByRole("heading", {
        name: goku.name,
      });

      expect(characterName).toBeInTheDocument();
    });
  });
});
