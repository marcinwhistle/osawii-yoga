import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../redux/cartRedux';
import { updateProduct } from '../../../redux/cartRedux';
import { removeProduct } from '../../../redux/cartRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import styles from './Cart.module.scss';
import PageBaner from '../../views/PageBaner/PageBaner';

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
      <Container>
        <div className="root">
          <PageBaner text="Podsumowanie koszyka" />
          <div className={styles.centeringContainer}>
            <div className={styles.productList}>
              {cartProducts.map((product) => (
                <div key={product.id} className={styles.productRow}>
                  <p className={styles.productName}>{product.name}</p>
                  <p className={styles.productPrice}>
                    <strong>Cena:</strong> {product.price}
                  </p>

                  <p>
                    <span className={styles.quantityLabel}>Ilość:</span>
                    <input
                      className={styles.quantityInput}
                      type="number"
                      min="1"
                      value={product.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          product.id,
                          parseInt(e.target.value),
                        )
                      }
                    />
                  </p>
                  <p>
                    <span className={styles.descriptionLabel}>Opis:</span>
                    <input
                      className={styles.descriptionInput}
                      type="text"
                      placeholder="Dodaj opis..."
                      value={product.clientDescription}
                      onChange={(e) =>
                        handleClientDescriptionChange(
                          product.id,
                          e.target.value,
                        )
                      }
                    />
                  </p>
                  <p>
                    <button
                      className={styles.removeButton}
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className={styles.cartValue}>Wartośc koszyka: {totalPrice}</p>
          <Link to="/order">
            <Button className={styles.summaryButton} variant="primary">
              Przejdź do podsumowania
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Cart;
