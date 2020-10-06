import React from 'react';
import {ThemeProvider, createMuiTheme } from '@material-ui/core';
import Home from './pages/Home';
import { theme } from './styles/GlobalStyles';
import LandingPage from './pages/LandingPage';
import Corpo from './pages/Corpo';



function App() {
  

  
  return (
    <ThemeProvider theme={theme}>{/** O Theme Provader envolve a aplicação */}
      {/* <Home /> */}
      <div>
        <LandingPage />
        <Corpo />
      </div>
    </ThemeProvider>
  );
}

export default App;
