import React from 'react';
import { motion } from 'framer-motion';

/**
 * Composant Section avec animations Framer Motion
 * @param {string} id - ID pour la navigation
 * @param {ReactNode} children - Contenu de la section
 * @param {string} className - Classes CSS additionnelles
 */
const Section = ({ id, children, className = '', ...props }) => {
    return (
        <motion.section
            id={id}
            className={`section ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            {...props}
        >
            <div className="container">
                {children}
            </div>
        </motion.section>
    );
};

export default Section;
