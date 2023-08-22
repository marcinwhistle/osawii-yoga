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
        <h1 className={styles.title}>{productData.name}</h1>
        <Row>
          <Col className="d-flex ">
            <div>
              <img
                className={styles['product-image']}
                src={`${process.env.PUBLIC_URL}/images/${productData.image}`}
                alt={productData.name}
              />
              <div className={styles.infoContainer}>
                <p className={styles.price}>
                  <strong>Cena: </strong> {productData.price}
                </p>
                <Button variant="primary" onClick={handleAddToCartClick}>
                  Add to cart
                </Button>
                <input
                  className={styles.input}
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>
            <p className={styles.description}>{productData.description}</p>
          </Col>
        </Row>
        <Row>
          {additionalImages.map((image, index) => (
            <Col key={index} className=" d-flex">
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
