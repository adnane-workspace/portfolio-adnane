import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

/**
 * Barre de navigation responsive avec menu mobile
 */
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Détecter le scroll pour changer le style de la navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation items
    const navItems = [
        { label: 'Accueil', href: '#hero' },
        { label: 'Compétences', href: '#skills' },
        { label: 'Projets', href: '#projects' },
        { label: 'Expérience', href: '#experience' },
        { label: 'Contact', href: '#contact' }
    ];

    // Fermer le menu mobile lors du clic sur un lien
    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo */}
                <a href="#hero" className={styles.logo}>
                    <img src="/images/logo.png" alt="adanaox" className={styles.logoImage} />
                </a>

                {/* Navigation Desktop */}
                <ul className={styles.navLinks}>
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className={styles.navLink}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Actions (Theme Toggle + Mobile Menu) */}
                <div className={styles.actions}>
                    <ThemeToggle />

                    {/* Bouton Menu Mobile */}
                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Menu Mobile */}
                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.mobileNavLinks}>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className={styles.mobileNavLink}
                                    onClick={handleNavClick}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
