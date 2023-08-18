import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const CustomNavBar = () => {
  return (
    <NavBar
      bg="light"
      variant="light"
      expand="lg"
      className="mt-4 mb-4 rounded"
    >
      <Container>
        <NavBar.Brand as={Link} to="/">
          Osawii Yoga
        </NavBar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/" className="text-dark">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="text-dark">
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  );
};

export default CustomNavBar;
