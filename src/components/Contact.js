// Contact.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../styles/Contact.css'
import { CustomAlert } from './CustomAlert';


import phoneNumber from '../assets/images/contact-phone-number.png'
import homeAddress from '../assets/images/contact-home-address.png'
import emailAdrress from '../assets/images/contact-email-address.png'

export const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });

    const [alert, setAlert] = useState({ show: false, message: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'phone' && /[^0-9]/.test(value)) {
            return; // Ignore les entrées non numériques pour le numéro de téléphone
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        emailjs.send('service_pd8zpij', 'template_mlykwas', formData, 'BxcN_Y77EXF3XMXk8')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setAlert({ show: true, message: 'Email sent successfully!' });
            })
            .catch((error) => {
                console.error('An error has occurred, please try again.:', error);
                setAlert({ show: true, message: 'An error has occurred, please try again.' });
            });
    }

    const closeAlert = () => {
        setAlert({ show: false, message: '' });
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: '',
        });
    };

    return (
        <section id="contact" className="contact-section">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={6} className="Contact-text-container">
                        <div class="contact-us-title">
                            <h3 class="inline-text">Contact </h3>
                            <h1 class="inline-text">Us</h1>
                        </div>
                        <h6 class="contact-us-description">
                            For questions, technical assistance, or collaboration opportunities, you can either send a message
                            via the contact information provided or fill out and submit the form.
                        </h6>
                        <div className="contact-info">
                            <img src={phoneNumber} alt="Phone Number Icon" />
                            <span>+33 06 99 60 22 75</span>
                        </div>
                        <div className="contact-info">
                            <img src={emailAdrress} alt="Email Address Icon" />
                            <a href="mailto:elienic509@gmail.com">elienic509@gmail.com</a>
                        </div>
                        <div className="contact-info">
                            <img src={homeAddress} alt="Home Address Icon" />
                            <span>60-62 RUE FERRARI, MARSEILLE (13005)</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={6} className="Contact-form-container">
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col xs={6}>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="First Name"
                                    />
                                </Col>
                                <Col xs={6}>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Last Name"
                                    />
                                </Col>
                            </Row>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Phone Number"
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email"
                            />

                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Message..."
                            />

                            <button type="submit">Send message</button>

                            <CustomAlert show={alert.show} message={alert.message} onClose={closeAlert} />
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};


