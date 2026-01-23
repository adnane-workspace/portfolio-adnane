import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

/**
 * Composant pour basculer entre le mode clair et sombre
 */
const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={styles.toggle}
            onClick={toggleTheme}
            aria-label="Changer de thème"
            title={`Passer en mode ${theme === 'light' ? 'sombre' : 'clair'}`}
        >
            <div className={`${styles.iconWrapper} ${theme === 'dark' ? styles.dark : ''}`}>
                <FiSun className={styles.sunIcon} />
                <FiMoon className={styles.moonIcon} />
            </div>
        </button>
    );
};

export default ThemeToggle;
