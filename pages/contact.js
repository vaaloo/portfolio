import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css"
import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            subject,
            message,
        };

        try {
            const response = await axios.post('/api/send-email', formData);

            console.log('E-mail sent successfully:', response.data);
            // Ajoutez ici une logique pour afficher un message de confirmation à l'utilisateur
        } catch (error) {
            console.error('Error sending the email:', error);
            // Gérez les erreurs et affichez un message d'erreur à l'utilisateur si nécessaire
        }
    };

    return (
        <><Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="Portfolio - Valoo"
                content="Web Developer - Valentin Gorgodian" />
            <title>
                Valoo - Home
            </title>
        </Head>
        <Header></Header>
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Sujet:
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </label>
                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </div>
        <Footer></Footer>
        </>
    );
}
