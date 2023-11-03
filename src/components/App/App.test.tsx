import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";
import CharactersProviderWrapper from "../../features/characters/store/CharactersProviderWrapper";

describe("Given the App component", () => {
  describe("When it renders a header", () => {
    test("Then it should show a DragonBall logo", () => {
      const expectedAltText = "DragonBall logo";

      render(
        <CharactersProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </CharactersProviderWrapper>,
      );

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});

describe("Given the App component", () => {
  describe("When it is render", () => {
    test("Then it should show a heading with the text 'Characters list'", () => {
      const expectedHeadingText = "Characters list";

      render(
        <CharactersProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <MemoryRouter initialEntries={[{ pathname: "/" }]}>
              <App />
            </MemoryRouter>
          </ThemeProvider>
        </CharactersProviderWrapper>,
      );

      const homePageElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(homePageElement).toBeInTheDocument();
    });
  });
});
