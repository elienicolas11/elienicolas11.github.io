import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "@styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaAngular, FaJava, FaVuejs } from "react-icons/fa";
import { SiSpring, SiCplusplus, SiCsharp, SiKotlin } from "react-icons/si";


export const skillIcons = {
    HTML: <FaHtml5 size={50} color="#E34F26" />,
    CSS: <FaCss3Alt size={50} color="#1572B6" />,
    JavaScript: <FaJs size={50} color="#F7DF1E" />,
    Bootstrap: <FaBootstrap size={50} color="#7952B3" />,
    React: <FaReact size={50} color="#61DAFB" />,
    Angular: <FaAngular size={50} color="#DD0031" />,
    "Vue.js": <FaVuejs size={50} color="#4FC08D" />,
    Spring: <SiSpring size={50} color="#6DB33F" />,
    "C++": <SiCplusplus size={50} color="#00599C" />,
    "C#": <SiCsharp size={50} color="#239120" />,
    Java: <FaJava size={50} color="#007396" />,
    Kotlin: <SiKotlin size={50} color="#7F52FF" />,
};

export const skillPercentage = {
    HTML: 100,
    CSS: 100,
    JavaScript: 100,
    Bootstrap: 100,
    React: 100,
    Angular: 50,
    "Vue.js": 75,
    Spring :75,
    "C++": 100,
    "C#": 50,
    Java: 100,
    Kotlin: 50,
};


const skillsGroups = [
    ["HTML", "CSS", "JavaScript", "Bootstrap"],
    ["React", "Angular", "Vue.js", "Spring"],
    ["C++", "C#", "Java", "Kotlin"],
];


export const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null); 

    return (
        <section id="skills" className="skills">
            <Container className="skills-container">
                <h1 className="skills-title">My Skills</h1>
                <br />
                <h6>
                    Throughout my academic and professional journey, I have had the privilege of
                    acquiring a diverse set of skills and experiences. Pursuing a Bachelor's degree
                    in Lebanon and a Master's degree in France allowed me to immerse myself in two
                    distinct education systems, each offering unique perspectives and approaches
                    to learning. This cross-cultural academic experience, combined with hands-on
                    projects and professional opportunities, has enriched my knowledge and equipped
                    me with a well-rounded skill set. Below, you’ll find a showcase of
                    the technical and creative skills I have developed over the years,
                    reflecting my passion for continuous growth and adaptability in a global
                    context.
                </h6>
                <br />
                {skillsGroups.map((group, rowIndex) => (
                    <Row key={rowIndex} className="align-items-stretch gx-3 gy-3 mb-3">
                        {group.map((skill, colIndex) => (
                            <Col key={colIndex} xs={6} md={3} xl={3}
                            onMouseEnter={() => setHoveredSkill(skill)} 
                            onMouseLeave={() => setHoveredSkill(null)} 
                            >
                                <div className="skill-item">
                                {hoveredSkill === skill ? (
                                        <div className="skill-percentage">
                                            {skillPercentage[skill]}%
                                        </div>
                                    ) : (
                                        <>
                                            {skillIcons[skill]}
                                            <h3>{skill}</h3>
                                        </>
                                    )}
                                </div>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>
        </section>
    );
};
