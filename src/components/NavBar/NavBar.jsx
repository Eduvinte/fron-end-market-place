import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#"><img src={ logo } alt="logo" width={300} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} id='menu' navbarScroll>
          <Link to="/">Home</Link>
          <Link to="/productos">Ver Productos</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/register">Registrar</Link>
          <Link to="/login" className='loginButton'>Login</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar