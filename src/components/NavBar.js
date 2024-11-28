import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '@images/logo.svg';
import navGithub from '@images/nav-github.svg';
import navLinkedIn from '@images/nav-linkedin.svg';
import navInstagram from '@images/nav-instagram.svg';
import '@styles/NavBar.css';

export const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // État pour gérer l'ouverture/fermeture du Navbar

  useEffect(() => {
    const handleResizeOrScroll = () => {
      if ((window.innerWidth < 768 && expanded) || window.scrollY > 50) {
        if (!scrolled) setScrolled(true);
      } else {
        if (scrolled) setScrolled(false);
      }
    };
  
    handleResizeOrScroll(); 
  
    window.addEventListener('resize', handleResizeOrScroll);
    window.addEventListener('scroll', handleResizeOrScroll);
  
    return () => {
      window.removeEventListener('resize', handleResizeOrScroll);
      window.removeEventListener('scroll', handleResizeOrScroll);
    };
  }, [expanded, scrolled]);
  

  const handleLinkClick = (link) => {
    setActiveLink(link); 
    setExpanded(false); 
  };

  return (
    <Navbar
      expand="md"
      className={scrolled ? "scrolled" : ""}
      id="main-navbar"
      expanded={expanded} 
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)} 
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {(location.pathname === '/' || location.pathname === '/Portfolio')  && (
              <>
                <Nav.Link
                  href="#about"
                  className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => handleLinkClick('about')} 
                >
                  About
                </Nav.Link>
                <Nav.Link
                  href="#skills"
                  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => handleLinkClick('skills')} 
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => handleLinkClick('contact')} 
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/work"
                  className={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => handleLinkClick('work')} 
                >
                  Work
                </Nav.Link>
              </>
            )}
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
              <a href="https://github.com/elienicolas11" target="_blank" rel="noreferrer">
                <img src={navGithub} alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/elie-nicolas-008535213/" target="_blank" rel="noreferrer">
                <img src={navLinkedIn} alt="Linkedin" />
              </a>
              <a href="https://www.instagram.com/elienicolas_/" target="_blank" rel="noreferrer">
                <img src={navInstagram} alt="Instagram" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
