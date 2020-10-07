import React from 'react';
import {ThemeProvider, createMuiTheme } from '@material-ui/core';
import Home from './pages/Home';
import { theme } from './styles/GlobalStyles';
import Layout from './pages/Layout';




function App() {
  

  
  return (
    <ThemeProvider theme={theme}>{/** O Theme Provader envolve a aplicação */}
      {/* <Home /> */}
      <div>
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
