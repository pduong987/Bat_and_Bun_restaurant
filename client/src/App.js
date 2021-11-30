import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeView from './views/HomeView'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<HomeView />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
