import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CustomNavBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      className="d-flex justify-content-between"
    >
      <Navbar.Brand as={Link} to="/" className="m-2">
        <h4>Osawii Yoga</h4>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link as={Link} to="/" className="h4 text-light">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="h4 text-light">
            Koszyk
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="h4 text-light">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavBar;
