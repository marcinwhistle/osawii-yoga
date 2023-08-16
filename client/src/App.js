import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/layout/Homepage/Homepage';
import Product from './components/views/Product/Product/Product';
import Cart from './components/views/Product/Cart/Cart';
import Order from './components/views/Order/Order';
import NotFound from './components/views/Not Found/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
