import React from 'react';
import ProductList from '../../views/ProductList/ProductList';
import styles from './Homepage.module.scss';
import Container from 'react-bootstrap/esm/Container';
import { Col, Row } from 'react-bootstrap';

const Homepage = () => {
  return (
    <>
      <div className={styles.backgroundImage}></div>
      <Container>
        <Row>
          <Col className="text-center mt-4 mb-4">
            <h1>Odzyskaj swoją wewnętrzną równowagę:</h1>
          </Col>
        </Row>
        <ProductList />
      </Container>
    </>
  );
};

export default Homepage;
