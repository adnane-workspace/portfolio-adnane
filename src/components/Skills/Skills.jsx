import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaFigma
} from 'react-icons/fa';
import {
    SiJavascript, SiTypescript, SiTailwindcss, SiRedux
} from 'react-icons/si';
import { skills } from '../../data/portfolioData';
import Section from '../Section/Section';
import Card from '../Card/Card';
import styles from './Skills.module.css';

/**
 * Mapping des icônes
 */
const iconMap = {
    FaReact: FaReact,
    FaHtml5: FaHtml5,
    FaCss3Alt: FaCss3Alt,
    FaGitAlt: FaGitAlt,
    FaNodeJs: FaNodeJs,
    FaFigma: FaFigma,
    SiJavascript: SiJavascript,
    SiTypescript: SiTypescript,
    SiTailwindcss: SiTailwindcss,
    SiRedux: SiRedux
};

/**
 * Section Compétences
 */
const Skills = () => {
    // Animation container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <Section id="skills">
            <h2 className="section-title">Compétences Techniques</h2>

            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon];

                    return (
                        <motion.div key={skill.id} variants={itemVariants}>
                            <Card hover={true} className={styles.skillCard}>
                                <div className={styles.iconWrapper}>
                                    {IconComponent && <IconComponent className={styles.icon} />}
                                </div>

                                <h3 className={styles.skillName}>{skill.name}</h3>

                                <p className={styles.skillCategory}>{skill.category}</p>

                                {/* Barre de progression */}
                                <div className={styles.progressBar}>
                                    <motion.div
                                        className={styles.progressFill}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                    />
                                </div>

                                <div className={styles.level}>{skill.level}%</div>
                            </Card>
                        </motion.div>
                    );
                })}
            </motion.div>
        </Section>
    );
};

export default Skills;
