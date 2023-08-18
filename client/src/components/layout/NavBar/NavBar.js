import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CustomNavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-auto">
          <h2>Osawii Yoga</h2>
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle />
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/" className="h3 text-dark">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/cart" className="h3 text-dark">
          Cart
        </Nav.Link>
        <Nav.Link as={Link} to="/cart" className="h3 text-dark">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavBar;
