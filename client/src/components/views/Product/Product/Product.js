import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../../../../redux/productsRedux';
import { Navigate, useParams } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { addProduct } from '../../../../redux/cartRedux';
import styles from './Product.module.scss';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => getProductById(state, id));

  const [quantity, setQuantity] = useState(1);

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    const { id, name, price, description } = productData;
    dispatch(
      addProduct({
        id,
        name,
        price,
        description,
        quantity: parseInt(quantity),
      }),
    );
  };

  if (!productData) return <Navigate to="/" />;

  const additionalImages = productData.additionalImages.split(', ');

  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <div>
              <h1>{productData.name}</h1>
              <img
                className={styles['product-image']}
                src={`${process.env.PUBLIC_URL}/images/${productData.image}`}
                alt={productData.name}
              />
              <h1>Cena: {productData.price}</h1>
              <p>{productData.description}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <Button variant="primary" onClick={handleAddToCartClick}>
              Add to cart
            </Button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {additionalImages.map((image, index) => (
            <Col key={index} className="mt-4 d-flex justify-content-center">
              <img
                className={styles['additional-product-image']}
                src={`${process.env.PUBLIC_URL}/images/${image}`}
                alt={`Additional ${index}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Product;
