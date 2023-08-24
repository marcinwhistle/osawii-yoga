import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getAll } from '../../../redux/cartRedux';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../../redux/ordersRedux';
import { API_URL } from '../../../config';
import { checkout } from '../../../redux/cartRedux';
import styles from './Order.module.scss';
import PageBaner from '../PageBaner/PageBaner.js';

const Order = () => {
  const cartProducts = useSelector(getAll);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  const [orderSuccess, setOrderSuccess] = useState(false);
  const [client, setClient] = useState('');
  const [address, setAddress] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      for (const product of cartProducts) {
        const orderData = {
          client,
          address,
          productId: product.id,
        };

        const response = await fetch(API_URL + '/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });

        if (response.ok) {
          const newOrder = await response.json();
          dispatch(addOrder(newOrder));
        } else {
        }
      }
    } catch (error) {
      console.error('Error saving order:', error);
    }
    dispatch(checkout());
    setOrderSuccess(true);
  };

  return (
    <>
      {!orderSuccess ? (
        <Container>
          <>
            <PageBaner text="Podsumowanie koszyka:" />

            {cartProducts.map((product) => (
              <div key={product.id} className={styles.productRow}>
                <p className={styles.productName}> {product.name}</p>
                <p className={styles.productPrice}>Cena: {product.price}</p>
                <p className={styles.productQuantity}></p>
                <p>Ilość {product.quantity}</p>
                <p>{product.clientDescription}</p>
              </div>
            ))}
            <p className={styles.cartSummary}>Wartość koszyka: {totalPrice}</p>

            <PageBaner text="Dane kontaktowe:" />
            <div className="text-center d-flex flex-column align-items-center">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="client">
                  <Form.Label>Imię i nazwisko:</Form.Label>
                  <Form.Control
                    className={styles.inputClient}
                    type="text"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Label>Adres dostawy:</Form.Label>
                  <Form.Control
                    className={styles.inputAddress}
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  className={styles.summaryButton}
                  variant="primary"
                  type="submit"
                >
                  Złóż zamówienie
                </Button>
              </Form>
            </div>
          </>
        </Container>
      ) : (
        <Container>
          <p className={styles.orderConfirmation}>Dziękujemy za zamówienie!</p>
        </Container>
      )}
    </>
  );
};

export default Order;
