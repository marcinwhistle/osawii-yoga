import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const BrandName = () => {
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

export default BrandName;
