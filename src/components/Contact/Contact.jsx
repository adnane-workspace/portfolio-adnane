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

        try {
            // Créer un objet FormData avec toutes les données du formulaire
            const formDataToSend = new FormData(e.target);

            // Ajouter des métadonnées supplémentaires
            formDataToSend.append('subject', `Nouveau message de ${formData.name}`);
            formDataToSend.append('from_name', formData.name);

            // Envoyer à Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });

                // Réinitialiser le formulaire HTML
                e.target.reset();

                // Réinitialiser le statut après 5 secondes
                setTimeout(() => setStatus(''), 5000);
            } else {
                throw new Error(data.message || 'Erreur lors de l\'envoi');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            setStatus('error');

            // Réinitialiser le statut après 5 secondes
            setTimeout(() => setStatus(''), 5000);
        }
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
                </motion.div>

                {/* Formulaire */}
                <motion.form
                    className={styles.form}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    aria-label="Formulaire de contact"
                >
                    {/* Champ caché pour Web3Forms - Remplacez par votre clé d'accès */}
                    <input
                        type="hidden"
                        name="access_key"
                        value="bbc73239-2f55-419f-a631-818b7f51da96"
                        aria-hidden="true"
                    />

                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            <FiUser aria-hidden="true" /> Nom
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
                            aria-required="true"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            <FiMail aria-hidden="true" /> Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="email@example.com"
                            aria-required="true"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>
                            <FiMessageSquare aria-hidden="true" /> Message
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
                            aria-required="true"
                        />
                    </div>

                    <Button
                        variant="primary"
                        size="large"
                        type="submit"
                        disabled={status === 'sending'}
                        className={styles.submitButton}
                        aria-label="Envoyer le message"
                    >
                        {status === 'sending' ? 'Envoi...' : (
                            <>
                                <FiSend aria-hidden="true" /> Envoyer le message
                            </>
                        )}
                    </Button>

                    {status === 'success' && (
                        <div className={styles.successMessage} role="alert">
                            ✓ Message envoyé avec succès !
                        </div>
                    )}

                    {status === 'error' && (
                        <div className={styles.errorMessage} role="alert">
                            ✗ Erreur lors de l'envoi. Veuillez réessayer.
                        </div>
                    )}
                </motion.form>
            </div>
        </Section>
    );
};

export default Contact;
