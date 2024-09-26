import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" style={{ color: '#FFC0CB' }}>Sarah Al Bastaki</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sarahnalbastaki-portfolio/projects">Projects</Nav.Link>
            <NavDropdown title="Get in touch" id="basic-nav-dropdown">
              <NavDropdown.Item href="/sarahnalbastaki-portfolio/about">About Me</NavDropdown.Item>
              <NavDropdown.Item href="/sarahnalbastaki-portfolio/for-you">For You</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/sarahnalbastaki-portfolio/resume.pdf">
                Resume
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;