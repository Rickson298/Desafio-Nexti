import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundPrimary: string;
      backgroundSecundary: string;
      textPrimary: string;
      textSecundary: string;
      border: string;
      backgroundHeader: string;
    };
  }
}
