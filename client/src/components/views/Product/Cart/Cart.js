import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../../redux/cartRedux';
import { updateProduct } from '../../../../redux/cartRedux';

const Cart = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  const cartProducts = useSelector(getAll);

  const calculateCartTotal = (cartProducts) => {
    let subTotal = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      subTotal += cartProducts[i].price * cartProducts[i].quantity;
    }
    return subTotal;
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateProduct({ id: productId, quantity: newQuantity }));
  };

  const handleClientDescriptionChange = (productId, newClientDescription) => {
    dispatch(
      updateProduct({
        id: productId,
        clientDescription: newClientDescription,
      }),
    );
  };

  useEffect(() => {
    const total = calculateCartTotal(cartProducts);
    setTotalPrice(total);
  }, [cartProducts]);

  return (
    <>
      <h1>Podsumowanie koszyka</h1>
      {cartProducts.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>
            Ilość:
            <input
              type="number"
              min="1"
              value={product.quantity}
              onChange={(e) =>
                handleQuantityChange(product.id, parseInt(e.target.value))
              }
            />
          </p>
          <p>
            Opis:
            <input
              type="text"
              placeholder="Dodaj opis..."
              value={product.clientDescription}
              onChange={(e) =>
                handleClientDescriptionChange(product.id, e.target.value)
              }
            />
          </p>
        </div>
      ))}
      <h2>Wartośc koszyka: {totalPrice}</h2>
    </>
  );
};

export default Cart;
