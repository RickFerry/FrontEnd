import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Home from './paginas/Home';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
