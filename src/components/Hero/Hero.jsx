import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { personalInfo, about } from '../../data/portfolioData';
import Button from '../Button/Button';
import styles from './Hero.module.css';

/**
 * Section Hero - Accueil complet avec présentation
 */
const Hero = () => {
    // Animations Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.gradient}></div>
            </div>

            <motion.div
                className={styles.content}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={styles.mainContent}>
                    {/* Partie gauche - Texte */}
                    <div className={styles.textContent}>
                        <motion.div className={styles.badge} variants={itemVariants}>
                            👋 Bienvenue sur mon portfolio
                        </motion.div>

                        <motion.h1 className={styles.title} variants={itemVariants}>
                            Bonjour, je suis <br />
                            <span className="gradient-text">{personalInfo.name}</span>
                        </motion.h1>

                        <motion.p className={styles.role} variants={itemVariants}>
                            {personalInfo.role}
                        </motion.p>

                        <motion.p className={styles.description} variants={itemVariants}>
                            {about.bio}
                        </motion.p>

                        {/* Statistiques */}
                        <motion.div className={styles.stats} variants={itemVariants}>
                            {about.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.stat}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                >
                                    <div className={styles.statValue}>{stat.value}</div>
                                    <div className={styles.statLabel}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div className={styles.buttons} variants={itemVariants}>
                            <Button href="#contact" variant="primary" size="large">
                                Me Contacter
                            </Button>
                            <Button href="#projects" variant="outline" size="large">
                                Voir mes projets
                            </Button>
                        </motion.div>
                    </div>

                    {/* Partie droite - Photo */}
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className={styles.imageContainer}>
                            <img
                                src={personalInfo.avatar}
                                alt={personalInfo.name}
                                className={styles.avatarImage}
                            />
                            <div className={styles.imageDecoration}></div>
                        </div>
                    </motion.div>
                </div>

                <motion.a
                    href="#skills"
                    className={styles.scrollDown}
                    variants={itemVariants}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <FiArrowDown />
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
