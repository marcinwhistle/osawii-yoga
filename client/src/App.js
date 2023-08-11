import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/layout/Homepage/Homepage';
import Product from './components/views/Product/Product/Product';
import Cart from './components/views/Product/Cart/Cart';
import Order from './components/views/Order/Order';
import Container from 'react-bootstrap/esm/Container';

const App = () => (
  <Provider store={store}>
    <Container>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/:product" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/order" element={<Order />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </Container>
  </Provider>
);

export default App;
