import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../../../../redux/productsRedux';
import { Navigate, useParams } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { addProduct } from '../../../../redux/cartRedux';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => getProductById(state, id));

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    const { id, name, price, description } = productData;
    dispatch(addProduct({ id, name, price, description }));
  };

  if (!productData) return <Navigate to="/" />;

  return (
    <>
      <h1>Single product</h1>
      <Container>
        <Row>
          <Col className="col-8 d-flex justify-content-center">
            <div>
              <h1>{productData.name}</h1>
              <h1>{productData.price}</h1>
              <h1>{productData.description}</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" onClick={handleAddToCartClick}>
              Add to cart
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
