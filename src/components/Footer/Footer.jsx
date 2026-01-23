import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { socialLinks, personalInfo } from '../../data/portfolioData';
import styles from './Footer.module.css';

/**
 * Footer avec liens réseaux sociaux
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socials = [
        { icon: FiGithub, url: socialLinks.github, label: 'GitHub' },
        { icon: FiLinkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
        { icon: FiTwitter, url: socialLinks.twitter, label: 'Twitter' },
        { icon: FiMail, url: socialLinks.email, label: 'Email' }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Logo / Nom */}
                <div className={styles.brand}>
                    <h3 className={styles.name}>{personalInfo.name}</h3>
                    <p className={styles.tagline}>{personalInfo.role}</p>
                </div>

                {/* Réseaux sociaux */}
                <div className={styles.socials}>
                    {socials.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label={social.label}
                                title={social.label}
                            >
                                <Icon />
                            </a>
                        );
                    })}
                </div>

                {/* Copyright */}
                <div className={styles.copyright}>
                    <p>
                        © {currentYear} {personalInfo.name}. Tous droits réservés.
                    </p>
                    <p className={styles.madeWith}>
                        Fait avec <FiHeart className={styles.heart} /> et React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
