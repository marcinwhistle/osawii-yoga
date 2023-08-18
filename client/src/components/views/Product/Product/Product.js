import React from 'react';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../../redux/productsRedux';
import { Navigate, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Product = () => {
  const { id } = useParams();
  const productData = useSelector((state) => getProductById(state, id));

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
      </Container>
    </>
  );
};

export default Product;
