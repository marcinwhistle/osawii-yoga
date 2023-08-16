import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Product = ({ name, price, description, id }) => (
  <article>
    <Row>
      <Col>
        <h1>{id}</h1>
        <h1>{name}</h1>
        <h1>{price}</h1>
        <h1>{description}</h1>
      </Col>
    </Row>
  </article>
);

export default Product;
