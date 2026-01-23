import React from 'react';
import styles from './Card.module.css';

/**
 * Composant Card réutilisable
 * @param {ReactNode} children - Contenu de la carte
 * @param {boolean} hover - Activer l'effet hover 3D
 * @param {string} className - Classes CSS additionnelles
 */
const Card = ({ children, hover = true, className = '', ...props }) => {
    return (
        <div
            className={`${styles.card} ${hover ? styles.hover : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
