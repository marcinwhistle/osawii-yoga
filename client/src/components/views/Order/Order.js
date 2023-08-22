import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getAll } from '../../../redux/cartRedux';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Order = () => {
  const cartProducts = useSelector(getAll);
  const [totalPrice, setTotalPrice] = useState(0);

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
      <h2>Dane kontaktowe:</h2>
      <Form>
        <Form.Group controlId="client">
          <Form.Label>Imię i nazwisko:</Form.Label>
          <Form.Control
            type="text"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Adres dostawy:</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Złóż zamówienie
        </Button>
      </Form>
    </>
  );
};

export default Order;
