import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '@styles/Introduction.css';
import introductionImage from '@images/introduction-image.svg';

export const Introduction = () => {
    
    const [imageAnimationComplete, setImageAnimationComplete] = useState(false);
    const [nameAnimationComplete, setNameAnimationComplete] = useState(false);

    const name = "Elie Nicolas";
    const paragraph = "I am a 23-year-old Lebanese developer living in France.\n" +
        "As a passionate web and software developer, I love creating seamless,\n" +
        "visually appealing projects with a touch of artistry. I aim to blend\n" +
        "functionality with aesthetics, making sure that everything not only\n" +
        "works well but also looks beautiful.";

    // Variants pour chaque lettre
    const letterAnimation = {
        hidden: { opacity: 0, x: -10 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.05, type: "spring", stiffness: 100 },
        }),
    };

    return (
        <section className="introduction" id='about'>
            <Container className="introduction-container">
                <Row className='align-items-center'>
                    <Col xs={12} md={8} xl={8} className="introduction-text-container">
                        {imageAnimationComplete && <h3>Hi, I'm</h3>}
                        <h1>
                            {name.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    custom={index}
                                    variants={letterAnimation}
                                    initial="hidden"
                                    animate={imageAnimationComplete ? "visible" : "hidden"}
                                    onAnimationComplete={() => {
                                        if (index === name.length - 1) {
                                            setNameAnimationComplete(true);
                                        }
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </h1>
                        <h6>
                            {paragraph.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    custom={index}
                                    variants={letterAnimation}
                                    initial="hidden"
                                    animate={nameAnimationComplete ? "visible" : "hidden"}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </h6>
                    </Col>
                    <Col xs={12} md={4} xl={4}>
                        <motion.img
                            src={introductionImage}
                            alt="Introduction Image"
                            className="introduction-image"
                            whileInView={{ x: 0 }} 
                            initial={{ x: '-10vw' }} 
                            transition={{ type: 'spring', stiffness: 50 }} 
                            viewport={{ once: true, amount: 0.5 }} 
                            onAnimationComplete={() => setImageAnimationComplete(true)}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
