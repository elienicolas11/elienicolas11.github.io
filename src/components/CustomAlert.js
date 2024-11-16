import React, { useState } from "react";
import { motion } from "framer-motion";
import '../styles/CustomAlerts.css';
import iconBalloon from '../assets/images/custom-alert-icon-balloon.png'; // Remplacez par le bon chemin

export const CustomAlert = ({ show, message, onClose }) => {
    if (!show) return null;

    const BalloonComponent = ({ i }) => {
        
        const balloonVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1, 
                y: -190, 
                transition: {
                    delay: (i % 2 === 0 ? i : i + 2) * 1,
                    duration: 5
                }
            }
        };

        return (
            <motion.img
                className="balloon-icon"
                src={iconBalloon}
                alt={`Balloon Icon ${i}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={balloonVariants}
                onUpdate={(latest) => {
                    if (latest.y < -155) {
                        latest.opacity = 0;
                    }
                }}
            />
        );
    };

    return (
        <div className="custom-alert-overlay">
            <div>
                <div className="custom-alert">
                    <p>{message}</p>
                    <button onClick={onClose}>Close</button>
                </div>
                <div className="balloon-container">
                    {[1, 2, 3, 4, 5 ,6 ,7].map((i) => (
                        <BalloonComponent key={i} i={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};
