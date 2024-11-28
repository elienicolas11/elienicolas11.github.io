import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


import workImage from '@images/work-image.png';
import workCircleBlue from '@images/work-circle-blue.png';
import workCircleOrange from '@images/work-circle-orange.png';
import workCircleGreen from '@images/work-circle-green.png';

import { workData } from '@components/WorkData';
import { WorkDetails } from '@components/WorkDetails.js';
import { NavbarComponent } from '@components/NavBar';

import '@styles/Work.css';

const Work = () => {

    const totalCards = workData.length;
    const { AcademicWork, ProfessionalWork, PersonalWork } = workData.reduce(
        (acc, work) => {
            if (work.category === 'Academic Work') acc.AcademicWork += 1;
            if (work.category === 'Professional Work') acc.ProfessionalWork += 1;
            if (work.category === 'Personal Work') acc.PersonalWork += 1;
            return acc;
        },
        { AcademicWork: 0, ProfessionalWork: 0, PersonalWork: 0 }
    );

    const chartData = {
        labels: ['Academic Work', 'Professional Work', 'Personal Work'],
        datasets: [
            {
                label: 'Work Distribution',
                data: [AcademicWork, ProfessionalWork, PersonalWork],
                backgroundColor: ['#4A81CF', '#095D40', '#FEB201'],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        plugins: {
            legend: { display: true, labels: { color: '#fff'}},
        },
        responsive: true,
    };

    const [selectedCard, setSelectedCard] = useState(null); 

    const handleCardClick = (work) => {
        setSelectedCard(work);
    };
    const handleCloseDetails = () => {
        setSelectedCard(null);
    };


    return (
        <div>
            <NavbarComponent />
            <div className="work" id='work'>
                <Container>
                    <Row className="align-items-stretch gx-3 gy-3 mb-3">
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
                                        <div class="projects-number">Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#{totalCards}</div>                                    </Col>
                                    <Col xs={12} md={4} xl={4}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><img src={workCircleBlue} alt="Work Circle Blue" /></td>
                                                    <td><h6>Academic Work</h6></td>
                                                </tr>
                                                <tr>
                                                    <td><img src={workCircleGreen} alt="Work Circle Green" /></td>
                                                    <td><h6>Professional Work</h6></td>
                                                </tr>
                                                <tr>
                                                    <td><img src={workCircleOrange} alt="Work Circle Orange" /></td>
                                                    <td><h6>Personal Work</h6></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={3} xl={3}>
                            <div className='left-column'>
                                <img src={workImage} alt="Work Image"/>
                                <br />
                                <table style={{ width: '80%' }}>
                                    <tbody>
                                        <tr>
                                            <td><h6>Personal</h6></td>
                                            <td><h6>{PersonalWork}</h6></td>
                                        </tr>
                                        <tr>
                                            <td><h6>Professional</h6></td>
                                            <td><h6>{ProfessionalWork}</h6></td>
                                        </tr>
                                        <tr>
                                            <td><h6>Academic</h6></td>
                                            <td><h6>{AcademicWork}</h6></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row className="align-items-stretch gx-3 gy-3">
                        {workData.map((work, index) => {
                            if (index === 2) {
                                return (
                                    <>
                                        <Col xs={6} md={3} xl={3} key={index}>
                                            <div className="work-card" onClick={() => handleCardClick(work)} >
                                                <img src={work.image} alt={work.projectName} />
                                            </div>
                                        </Col>
                                        <Col xs={6} md={3} xl={3} key={index}>
                                            <div className='left-column'>
                                                <Pie data={chartData} options={chartOptions} />
                                            </div>
                                        </Col>
                                    </>

                                );

                            }
                            return (
                                <Col xs={6} md={3} xl={3} key={index}>
                                    <div className="work-card" onClick={() => handleCardClick(work)} >
                                        <img src={work.image} alt={work.projectName} />
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
            {selectedCard && (
            <WorkDetails card={selectedCard} onClose={handleCloseDetails} />
        )}
        </div>
    );
};

export default Work;
