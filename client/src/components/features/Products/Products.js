import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product.id} className="mt-4" xs="12" md="6" lg="4">
            <Card>
              <Card.Img
                variant="top"
                src={`${process.env.PUBLIC_URL}/images/${product.imageSource}`}
                alt={product.name}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Price: </strong>
                  {product.price}
                </Card.Text>
                <Card.Text>
                  <strong>Description: </strong>
                  {product.description}
                </Card.Text>
                <Button
                  variant="primary"
                  as={Link}
                  to={'/product/' + product.id}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        ;
      </Row>
    </>
  );
};

export default Products;
