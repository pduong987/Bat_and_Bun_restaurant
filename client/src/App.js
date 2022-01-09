import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AuthProvider } from './contexts/AuthContext';
import { ItemProvider } from './contexts/ItemContext';
import { CartProvider } from './contexts/CartContext';
import { OrderProvider } from './contexts/OrderContext';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import LoginView from './views/LoginView';
import PrivateRoute from './components/PrivateRoute';
import DashboardView from './views/DashboardView';
import AdminMenuList from './components/DashboardView/AdminMenuList';
import AdminOrderList from './components/DashboardView/AdminOrderList';
import OrderRecord from './components/DashboardView/OrderRecord';

// For testing display of sub-pages
import CartView from './views/CartView';
import OrderConfirmationView from './views/OrderConfirmationView';
import ThankYouView from './views/ThankYouView';
import TrackOrderView from './views/TrackOrderView';

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
        <AuthProvider>
          <ItemProvider>
            <CartProvider>
              <OrderProvider>
                <Header />
                <main>
                    <Routes>
                      <Route exact path='/' element={<HomeView />} />
                      <Route exact path='/about' element={<AboutView />} />
                      <Route exact path='/admin-login' element={<LoginView />} />
                      <Route exact path='/dashboard/*' element={
                        <PrivateRoute>
                          <DashboardView>
                            <Routes>
                              <Route exact path='/' element={<AdminOrderList />} />
                              <Route exact path='/menu' element={<AdminMenuList />} />
                              <Route exact path='/order-record' element={<OrderRecord />} />
                            </Routes>
                          </DashboardView>
                        </PrivateRoute>
                      } />

                      {/* For testing display of sub-pages */}
                      <Route exact path='/cart' element={<CartView />} />
                      <Route exact path='/order-confirmation' element={<OrderConfirmationView />} />
                      <Route exact path='/thank-you' element={<ThankYouView />} />
                      <Route exact path='/track-order' element={<TrackOrderView />} />
                    </Routes>
                </main>
                <Footer />
              </OrderProvider>
            </CartProvider>
          </ItemProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
