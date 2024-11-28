import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import mainHomeImage from '@images/main-home-image.png';
import colorfulBg from '@images/colorful-background.png';
import gearWheel from '@images/gear-wheel.png';
import '@styles/Home.css';

export const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <section className='home' id='home'>
      <Container>
        {!isSmallScreen && (
          <Row className='align-items-center'>

            <Col xs={12} md={2} xl={2} className="home-text-container">
              <h1>Developer</h1>
              With a passion for creating websites and software
            </Col>
            <Col xs={12} md={8} xl={8}>
              <div className="image-container">
                <motion.img
                  src={gearWheel}
                  alt="Gear Wheel"
                  className="main-home-gear-wheel"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeIn", repeatDelay: 90 }}
                />
                <img src={mainHomeImage} alt="Main Home Image" className="main-home-image" />
                <motion.img
                  src={colorfulBg}
                  alt="Colors"
                  className="main-home-colors"
                  initial={{ opacity: 0.2, scale: 0.5 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 20, ease: "easeOut", repeat: Infinity, repeatDelay: 90 }}
                />
              </div>
            </Col>
            <Col xs={6} md={2} xl={2} className="home-text-container">
              <h1>Designer</h1>
              With a passion for blending functionality and aesthetics.
            </Col>
          </Row>
        )}
        {isSmallScreen && (
          <Row className='align-items-center gy-5'>
            <Col xs={1} className="home-text-container"></Col>
            <Col xs={10} className="home-text-container">
              <h1>Developer | Designer</h1>
              <p>
                I'm a developer with a passion for creating websites and software, and a designer with a passion for blending functionality and aesthetics.
              </p>
            </Col>
            <Col xs={1} className="home-text-container"></Col>
            <Col xs={12}>
              <div className="image-container">
                <motion.img
                  src={gearWheel}
                  alt="Gear Wheel"
                  className="main-home-gear-wheel"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeIn", repeatDelay: 90 }}
                />
                <img src={mainHomeImage} alt="Main Home Image" className="main-home-image" />
                <motion.img
                  src={colorfulBg}
                  alt="Colors"
                  className="main-home-colors"
                  initial={{ opacity: 0.2, scale: 0.5 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 20, ease: "easeOut", repeat: Infinity, repeatDelay: 90 }}
                />
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  )
}
