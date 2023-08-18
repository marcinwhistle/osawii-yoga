import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Container>
      <Row className=" text-muted justify-content-center">
        <Col className="mb-4 mt-4 h3" md="auto">
          Osawii Yoga © 2023
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
