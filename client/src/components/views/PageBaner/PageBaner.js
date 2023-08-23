import { Col, Row } from 'react-bootstrap';

const PageBaner = ({ text }) => {
  return (
    <Row>
      <Col className="text-center mt-4 mb-4">
        <h1>{text}</h1>
      </Col>
    </Row>
  );
};

export default PageBaner;
