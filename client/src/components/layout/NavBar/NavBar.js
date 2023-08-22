import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CustomNavBar = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="sm"
      className="d-flex justify-content-between"
    >
      <Navbar.Brand as={Link} to="/" className="m-2">
        <h3>Osawii Yoga</h3>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link as={Link} to="/" className="h3 text-dark">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="h3 text-dark">
            Koszyk
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="h3 text-dark">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavBar;
