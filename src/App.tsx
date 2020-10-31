import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

// import Header from './components/Header';

import GlobalStyle from './styles/global';

import light from './styles/themes/light';
// import dark from './styles/themes/dark';

const App: React.FC = () => (
  <ThemeProvider theme={light}>
    {/* <Header /> */}
    <Routes />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
