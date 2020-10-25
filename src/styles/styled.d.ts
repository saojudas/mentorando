import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      primaryLighter: string,
      primaryLight: string,
      primary: string,

      secondaryLighter: string,
      secondaryLight: string,
      secondary: string,

      primaryGradient: string,
      secondaryGradient: string,

      white: string,
      black: string,
      blue: string,
      red: string,
      orange: string,

      grayLight: string,
      gray: string,
      grayDark: string,

      background: string,
      text: string,
    },
  }
}
