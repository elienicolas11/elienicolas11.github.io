import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavbarComponent } from './NavBar';
import workImage from '../assets/images/work-image.png';
import workCircleBlue from '../assets/images/work-circle-blue.png';
import workCircleWhite from '../assets/images/work-circle-White.png';
import workCircleGreen from '../assets/images/work-circle-green.png';
import '../styles/Work.css';

const Work = () => {

    const ProfessionalWork = 2;
    const AcademicWork = 1;
    const PersonalWork = 2;

    return (
        <div>
            <NavbarComponent />
            <div className="work">
                <Container>
                    <Row className="align-items-stretch gx-4 gy-4">
                        <Col xs={12} md={9} xl={9}>
                            <div className='introduction-column'>
                                <h1>Web Portfolio</h1>
                                <Row className="align-items-stretch gy-4">
                                    <Col xs={12} md={8} xl={8}>
                                        <h6>Having recently completed my studies, I may not have extensive
                                            professional experience yet, but I am dedicated to improving my skills
                                            through personal projects and collaborating on professional ones. Every
                                            project I take on is an opportunity to learn, grow, and push the
                                            boundaries of my creativity and expertise.
                                        </h6>
                                        <br />
                                        <div class="projects-number">Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#6</div>                                    </Col>
                                    <Col xs={12} md={4} xl={4}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><img src={workCircleBlue} alt="Work Circle Blue" /></td>
                                                    <td><h6>Personal Work</h6></td>
                                                </tr>
                                                <tr>
                                                    <td><img src={workCircleGreen} alt="Work Circle Green" /></td>
                                                    <td><h6>Professional Work</h6></td>
                                                </tr>
                                                <tr>
                                                    <td><img src={workCircleWhite} alt="Work Circle White" /></td>
                                                    <td><h6>Academic Work</h6></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={3} xl={3}>
                            <div className='left-column'>
                                <img src={workImage} alt="Work Image" style={{ width: '180px', height: '200px' }} />
                                <br />
                                <table style={{ width: '80%' }}>
                                    <tbody>
                                        <tr>
                                            <td><h6>Personal Work</h6></td>
                                            <td><h6>{PersonalWork}</h6></td>
                                        </tr>
                                        <tr>
                                            <td><h6>Professional Work</h6></td>
                                            <td><h6>{ProfessionalWork}</h6></td>
                                        </tr>
                                        <tr>
                                            <td><h6>Academic Work</h6></td>
                                            <td><h6>{AcademicWork}</h6></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Work;
