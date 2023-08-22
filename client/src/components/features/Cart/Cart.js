import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../redux/cartRedux';
import { updateProduct } from '../../../redux/cartRedux';
import { removeProduct } from '../../../redux/cartRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from './Cart.module.scss';

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

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
  };

  useEffect(() => {
    const total = calculateCartTotal(cartProducts);
    setTotalPrice(total);
  }, [cartProducts]);

  return (
    <>
      <h1>Podsumowanie koszyka</h1>

      {cartProducts.map((product) => (
        <div key={product.id} className={styles.productRow}>
          <p className={styles.productName}>{product.name}</p>
          <p className={styles.productPrice}>{product.price}</p>
          <div className={styles.productDetails}>
            <p className={styles.quantityLabel}>Ilość:</p>
            <input
              type="number"
              min="1"
              value={product.quantity}
              onChange={(e) =>
                handleQuantityChange(product.id, parseInt(e.target.value))
              }
            />
            <p className={styles.descriptionLabel}>Opis:</p>
            <input
              type="text"
              placeholder="Dodaj opis..."
              value={product.clientDescription}
              onChange={(e) =>
                handleClientDescriptionChange(product.id, e.target.value)
              }
            />
            <button onClick={() => handleRemoveProduct(product.id)}>
              Usuń z koszyka <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      ))}
      <h2>Wartośc koszyka: {totalPrice}</h2>
      <Link to="/order">
        <Button variant="primary">Przejdź do podsumowania</Button>
      </Link>
    </>
  );
};

export default Cart;
