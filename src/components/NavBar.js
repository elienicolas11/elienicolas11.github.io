import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../assets/images/logo.svg';
import navGithub from '../assets/images/nav-github.svg';
import navLinkedIn from '../assets/images/nav-linkedin.svg';
import navInstagram from '../assets/images/nav-instagram.svg';
import 'C:/Users/Admin/Desktop/React/Portfolio/src/styles/NavBar.css';

export const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="Logo" height="60" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><span className="navbar-toggler-icon"></span></Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/work" className={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('work')}>Work</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
              <a href="https://github.com/elienicolas11" target="_blank" rel="noreferrer"><img src={navGithub} alt="Github" /></a>
              <a href="https://www.linkedin.com/in/elie-nicolas-008535213/" target="_blank" rel="noreferrer"><img src={navLinkedIn} alt="Linkedin" /></a>
              <a href="https://www.instagram.com/elienicolas_/" target="_blank" rel="noreferrer"><img src={navInstagram} alt="Instagram" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}