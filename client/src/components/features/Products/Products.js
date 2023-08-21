import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product.id} className="mt-4 d-flex" xl="6">
            <Card>
              <Card.Img
                variant="top"
                src={`${process.env.PUBLIC_URL}/images/${product.imageSource}`}
                alt={product.name}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Cena: </strong>
                  {product.price}
                </Card.Text>
                <Card.Text>
                  <strong>Opis: </strong>
                  {product.description}
                </Card.Text>
                <div className="mt-auto">
                  <Button
                    variant="primary"
                    as={Link}
                    to={'/product/' + product.id}
                  >
                    Dowiedz się więcej
                  </Button>
                </div>
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
