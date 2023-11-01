import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given the App component", () => {
  describe("When it renders a header", () => {
    test("Then it should show a DragonBall logo", () => {
      const expectedAltText = "DragonBall logo";

      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
