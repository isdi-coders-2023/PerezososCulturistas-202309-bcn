import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CharactersProviderWrapper from "../../features/characters/store/CharactersProviderWrapper";
import mainTheme from "../../styles/mainTheme";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it renders", () => {
    test("Then it should show a Goku's gif", () => {
      const expectedAltText = "Goku playing with Dragon Balls";

      render(
        <CharactersProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <Loading />
          </ThemeProvider>
        </CharactersProviderWrapper>,
      );

      const gif = screen.getByAltText(expectedAltText);

      expect(gif).toBeInTheDocument();
    });
  });

  describe("When it receives the text 'Loading...'", () => {
    test("Then it should show 'Loading...'", () => {
      const expectedText = "Loading...";

      render(
        <CharactersProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <Loading />
          </ThemeProvider>
        </CharactersProviderWrapper>,
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
