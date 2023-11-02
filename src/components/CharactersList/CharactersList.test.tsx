import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharactersList from "./CharactersList";

import CharactersProviderWrapper from "../../features/characters/store/CharactersProviderWrapper";

describe("Given a CharactersList component", () => {
  describe("When it is called with a list of 2 characters", () => {
    test("Then it should show a list of 2 characters", () => {
      const numberOfCharacters = 2;

      render(
        <CharactersProviderWrapper>
          <CharactersList />
        </CharactersProviderWrapper>,
      );

      const list = screen.getByRole("list");
      const listItem = screen.getAllByRole("listitem");

      expect(list).toBeInTheDocument();
      expect(listItem.length).toBe(numberOfCharacters);
    });
  });
});
