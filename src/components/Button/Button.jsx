import React from 'react';
import styles from './Button.module.css';

/**
 * Composant Button réutilisable
 * @param {string} variant - Style du bouton: 'primary', 'secondary', 'outline'
 * @param {string} size - Taille: 'small', 'medium', 'large'
 * @param {function} onClick - Fonction appelée au clic
 * @param {ReactNode} children - Contenu du bouton
 * @param {string} href - Lien (transforme le bouton en lien)
 * @param {boolean} disabled - Désactiver le bouton
 */
const Button = ({
    variant = 'primary',
    size = 'medium',
    onClick,
    children,
    href,
    disabled = false,
    className = '',
    ...props
}) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

    // Si href est fourni, retourner un lien
    if (href) {
        return (
            <a
                href={href}
                className={buttonClass}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
                {...props}
            >
                {children}
            </a>
        );
    }

    // Sinon, retourner un bouton
    return (
        <button
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
