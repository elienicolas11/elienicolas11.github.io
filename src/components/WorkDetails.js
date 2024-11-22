import React from 'react';
import '@styles/WorkDetails.css';

export const WorkDetails = ({ card, onClose }) => {
    return (
        <div className="custom-alert-overlay">
            <div className="custom-alert">
                <h2>{card.projectName}</h2>
                <br />
                <p><strong>Category:</strong> {card.category}</p>
                <p><strong>Timeline:</strong> {card.date}</p>
                <p><strong>Context:</strong> {card.context}</p>
                {card.technology && (
                    <p>
                        <strong>Technologies Used:</strong>{' '}
                        {Array.isArray(card.technology) ? card.technology.join(', ') : card.technology}
                    </p>
                )}
                
                <p><strong>Description:</strong> {card.description}</p>
                {card.comment && (
                    <>
                        <ul>
                            {card.comment.map((comm, i) => (
                                <li key={i}> {comm}</li>
                            ))}
                        </ul>
                    </>
                )}
                {card.link && (
                    <p>
                        <strong>Link:</strong>{' '}
                        <a href={card.link} target="_blank" rel="noopener noreferrer">
                            {card.link}
                        </a>
                    </p>
                )}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

