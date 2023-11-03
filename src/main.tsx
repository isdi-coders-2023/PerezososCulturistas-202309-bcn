import "@fontsource/bangers";
import "@fontsource/nunito";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import GlobalStyle from "./styles/GlobalStyle";
import mainTheme from "./styles/mainTheme";
import CharactersProviderWrapper from "./features/characters/store/CharactersProviderWrapper";
import UiContextWrapper from "./features/ui/store/UiContextWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UiContextWrapper>
        <CharactersProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </CharactersProviderWrapper>
      </UiContextWrapper>
    </BrowserRouter>
  </React.StrictMode>,
);
