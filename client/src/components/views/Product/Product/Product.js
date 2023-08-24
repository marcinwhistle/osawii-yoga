import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../../../../redux/productsRedux';
import { Navigate, useParams } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { addProduct } from '../../../../redux/cartRedux';
import styles from './Product.module.scss';
import PageBaner from '../../PageBaner/PageBaner';

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
        <PageBaner text={productData.name} />
        <Row>
          <Col className="d-flex">
            <div>
              <img
                className={styles['product-image']}
                src={`${process.env.PUBLIC_URL}/images/${productData.image}`}
                alt={productData.name}
              />
            </div>
            <div className={styles.infoContainer}>
              <p className={styles.description}>{productData.description}</p>
              <div className={styles.priceContainer}>
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
          </Col>
        </Row>
        <div className={styles.gallery}>
          <Row>
            {additionalImages.map((image, index) => (
              <Col key={index}>
                <img
                  className={styles['additional-product-image']}
                  src={`${process.env.PUBLIC_URL}/images/${image}`}
                  alt={`Additional ${index}`}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Product;
