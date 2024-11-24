import React from "react";
import '@styles/CustomAlerts.css';

export const CustomAlert = ({ show, message, onClose }) => {
    if (!show) return null;

    return (
        <div className="custom-alert-overlay">
                <div className="custom-alert">
                    <p>{message}</p>
                    <button onClick={onClose}>Close</button>
                </div>
        </div>
    );
};
