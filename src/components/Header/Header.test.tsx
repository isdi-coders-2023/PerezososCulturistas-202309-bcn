import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a DragonBall logo", () => {
      const expectedAltText = "DragonBall logo";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Header />;
          </ThemeProvider>
        </BrowserRouter>,
      );
      const headerImage = screen.getByAltText(expectedAltText);

      expect(headerImage).toBeInTheDocument();
    });
  });
});
