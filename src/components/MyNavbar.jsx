// Navbar.jsx
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FrequencySpectrum from './FrequencySpectrum';

function MyNavbar() {
  const navHeight = 120;

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
      {/* Animated FFT Spectrum Background */}
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <FrequencySpectrum
          color="rgba(109, 182, 206, 0.8)"
          height={navHeight}
          barCount={128}
        />
      </div>

      <Container style={{ zIndex: 10, position: 'relative' }}>
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
