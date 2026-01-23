import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import Section from '../Section/Section';
import Card from '../Card/Card';
import styles from './Projects.module.css';

/**
 * Section Projets
 */
const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <Section id="projects">
            <h2 className="section-title">Mes Projets</h2>
            <p className={styles.subtitle}>
                Découvrez une sélection de mes réalisations récentes
            </p>

            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {projects.map((project) => (
                    <motion.div key={project.id} variants={itemVariants}>
                        <Card hover={true} className={styles.projectCard}>
                            {/* Image du projet */}
                            <div className={styles.imageContainer}>
                                <div className={styles.imagePlaceholder}>
                                    <span className={styles.projectNumber}>#{project.id}</span>
                                </div>
                                {project.featured && (
                                    <span className={styles.featuredBadge}>⭐ Featured</span>
                                )}
                            </div>

                            {/* Contenu */}
                            <div className={styles.content}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>

                                {/* Tags */}
                                <div className={styles.tags}>
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Liens */}
                                <div className={styles.links}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        <FiGithub /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        <FiExternalLink /> Demo
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export default Projects;
