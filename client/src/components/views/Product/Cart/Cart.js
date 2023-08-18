import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../../redux/cartRedux';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(getAll);

  return (
    <>
      <div>Cart</div>
      {cartProducts.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>Amount: {product.amount}</p>
        </div>
      ))}
    </>
  );
};

export default Cart;
