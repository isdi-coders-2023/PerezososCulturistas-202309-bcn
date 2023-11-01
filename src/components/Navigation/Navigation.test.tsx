import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import CharactersProviderWrapper from "../../features/characters/store/CharactersProviderWrapper";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'home' links", () => {
      const expectedTextHome = "home";

      render(
        <BrowserRouter>
          <CharactersProviderWrapper>
            <ThemeProvider theme={mainTheme}>
              <Navigation />
            </ThemeProvider>
          </CharactersProviderWrapper>
        </BrowserRouter>,
      );

      const navigationLinkHome = screen.getByRole("link", {
        name: expectedTextHome,
      });

      expect(navigationLinkHome).toBeInTheDocument();
    });
  });
});

describe("When it is rendered", () => {
  test("Then it should show 'create' links", () => {
    const expectedTextCreate = "create";

    render(
      <BrowserRouter>
        <CharactersProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </CharactersProviderWrapper>
      </BrowserRouter>,
    );

    const navigationLinkCreate = screen.getByRole("link", {
      name: expectedTextCreate,
    });

    expect(navigationLinkCreate).toBeInTheDocument();
  });
});
