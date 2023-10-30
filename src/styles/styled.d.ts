import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      accent: string;
      light: string;
    };
    typography: {
      mainFont: string;
      secondaryFont: string;
    };
  }
}
