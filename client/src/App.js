import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';

// For website theme
const theme = createTheme({
  palette: {
    primary: {
    main: '#3162ae',
    light: '#698fe0',
    dark: '#00397e',
    },
  },
  typography: {
    color: '#3c3c3c',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<HomeView />} />
            <Route exact path='/about' element={<AboutView />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
