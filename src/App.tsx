import React from 'react';
import { ThemeProvider } from 'styled-components';

import SignIn from './pages/SignIn';

import GlobalStyle from './styles/global';

import light from './styles/themes/light';
// import dark from './styles/themes/dark';

const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <SignIn />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
