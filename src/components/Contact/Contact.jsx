import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import Section from '../Section/Section';
import Button from '../Button/Button';
import styles from './Contact.module.css';

/**
 * Section Contact avec formulaire
 */
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulation d'envoi (remplacer par EmailJS ou votre backend)
        setTimeout(() => {
            console.log('Form data:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <Section id="contact">
            <h2 className="section-title">Contactez-moi</h2>
            <p className={styles.subtitle}>
                Une question ? Un projet ? N'hésitez pas à me contacter !
            </p>

            <div className={styles.container}>
                {/* Informations de contact */}
                <motion.div
                    className={styles.info}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className={styles.infoTitle}>Restons en contact</h3>
                    <p className={styles.infoText}>
                        Je suis toujours ouvert aux nouvelles opportunités et collaborations.
                        N'hésitez pas à me contacter !
                    </p>

                    <div className={styles.contactDetails}>
                        <div className={styles.contactItem}>
                            <FiMail className={styles.contactIcon} />
                            <div>
                                <div className={styles.contactLabel}>Email</div>
                                <a href={`mailto:${personalInfo.email}`} className={styles.contactValue}>
                                    {personalInfo.email}
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <FiUser className={styles.contactIcon} />
                            <div>
                                <div className={styles.contactLabel}>Localisation</div>
                                <div className={styles.contactValue}>{personalInfo.location}</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Formulaire */}
                <motion.form
                    className={styles.form}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            <FiUser /> Nom
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="Votre nom"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            <FiMail /> Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="votre.email@example.com"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>
                            <FiMessageSquare /> Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className={styles.textarea}
                            placeholder="Votre message..."
                        />
                    </div>

                    <Button
                        variant="primary"
                        size="large"
                        type="submit"
                        disabled={status === 'sending'}
                        className={styles.submitButton}
                    >
                        {status === 'sending' ? 'Envoi...' : (
                            <>
                                <FiSend /> Envoyer le message
                            </>
                        )}
                    </Button>

                    {status === 'success' && (
                        <div className={styles.successMessage}>
                            ✓ Message envoyé avec succès !
                        </div>
                    )}
                </motion.form>
            </div>
        </Section>
    );
};

export default Contact;
