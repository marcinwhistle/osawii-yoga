import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getAll } from '../../../redux/cartRedux';
import { useEffect } from 'react';
import { useState } from 'react';

const Order = () => {
  const cartProducts = useSelector(getAll);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateCartTotal = (cartProducts) => {
    let subTotal = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      subTotal += cartProducts[i].price * cartProducts[i].quantity;
    }
    return subTotal;
  };

  useEffect(() => {
    const total = calculateCartTotal(cartProducts);
    setTotalPrice(total);
  }, [cartProducts]);

  return (
    <>
      <h1>Podsumowanie</h1>
      {cartProducts.map((product) => (
        <div key={product.id}>
          <p>Nazwa: {product.name}</p>
          <p>Cena: {product.price}</p>
          <p>Ilość {product.quantity}</p>
          <p>Dodatkowy opis: {product.clientDescription}</p>
        </div>
      ))}
      <p>Wartość koszyka: {totalPrice}</p>
    </>
  );
};

export default Order;
