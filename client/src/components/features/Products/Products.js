import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Products.module.scss';

const Products = ({ products }) => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col
            key={product.id}
            className="mt-4 d-flex"
            xl="3"
            lg="4"
            md="6"
            sm="12"
          >
            <Card>
              <Card.Img
                className={styles.img}
                src={`${process.env.PUBLIC_URL}/images/${product.image}`}
                alt={product.name}
              />
              <Card.Body className={`d-flex flex-column ${styles.cardBody}`}>
                <Card.Title className={styles.title}>{product.name}</Card.Title>
                <div className={styles.infoContainer}>
                  <div className={styles.price}>
                    <strong>Cena: </strong>
                    {product.price}
                  </div>
                  <Button as={Link} to={'/product/' + product.id}>
                    Dowiedz się więcej
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;
