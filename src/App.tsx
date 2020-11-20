import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';

import Routes from './routes';

import GlobalStyle from './styles/global';

import light from './styles/themes/light';
// import dark from './styles/themes/dark';

import { store, persistor } from './store';

const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default App;
