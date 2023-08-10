import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const CustomNavBar = () => {
  return (
    <NavBar
      bg="primary"
      variant="dark"
      expand="lg"
      className="mt-4 mb-4 rounded"
    >
      <Container>
        <NavBar.Brand href="/">Osawii YOGA</NavBar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  );
};

export default CustomNavBar;
