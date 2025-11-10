// Navbar.jsx
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SineWave from './Sinewave';

function MyNavbar() {
  const navHeight = 70;

  useEffect(() => {
    gsap.fromTo(
      ['.navbar-brand', '.nav-link'],
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      style={{
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid black',
      }}
    >
      {/* Animated Sine Waves Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <SineWave color="rgba(109, 182, 206, 0.18)" amplitude={12} points={12} height={navHeight} />
        <SineWave color="rgba(14, 59, 87, 0.16)" amplitude={30} points={14} height={navHeight} />
        <SineWave color="rgba(17, 78, 82, 0.19)" amplitude={17} points={10} height={navHeight} />
      </div>

      <Container style={{ zIndex: 1, position: 'relative' }}>
        <Navbar.Brand href="/"><img
          src="/Logo.png"
          alt="Card image"
          className="img-fluid float-end mb-3"
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/Blog"><Nav.Link>Blog</Nav.Link></LinkContainer>
            <LinkContainer to="/Contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
