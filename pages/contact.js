import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Contact() {
    useEffect(() => {
        // Chargez le CSS et le script iziToast depuis le CDN
        const iziToastCSS = document.createElement('link');
        iziToastCSS.rel = 'stylesheet';
        iziToastCSS.href = 'https://cdn.jsdelivr.net/npm/izitoast/dist/css/iziToast.min.css';
        document.head.appendChild(iziToastCSS);

        const iziToastScript = document.createElement('script');
        iziToastScript.src = 'https://cdn.jsdelivr.net/npm/izitoast';
        iziToastScript.async = true;
        document.body.appendChild(iziToastScript);
    }, []);
    const sucessIziToast = () => {
        iziToast.success({
            title: 'Success',
            message: 'Email sent successfully',
            position: 'topRight',
        });
    };

    const errorIziToast = () => {
        iziToast.error({
            title: 'Error',
            message: 'Error sending the email',
            position: 'topRight',
        });
    }

    const warningIziToast = () => {
        iziToast.warning({
            title: 'Warning',
            message: 'Please fill in all fields',
            position: 'topRight',
        });
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            warningIziToast();
            return;
        }

        const formData = {
            name,
            email,
            message,
        };

        try {
            const response = await axios.post('/api/send-email', formData);

            console.log('E-mail sent successfully:', response.data);
            sucessIziToast();
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending the email:', error);
            errorIziToast()
        }
    };

    return (
        <><Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="Portfolio - Valoo"
                content="Web Developer - Valentin Gorgodian" />
            <title>
                Valoo - Contact
            </title>
        </Head>
        <Header></Header>
            <h1 className={styles.about_me_title}>CONTACT ME</h1>
            <p className={styles.about_me_text}>If you want to contact me, you can fill out the form below.</p>
            <div className={styles.contact_container}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                    <label>
                        Name
                        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Message
                        <textarea value={message} placeholder="Enter your message" rows="10" cols="50" onChange={(e) => setMessage(e.target.value)} />
                    </label>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
            <p className={styles.about_me_text}>You can also contact me by email at <a href="mailto:contact@vaaloo.fr">contact@vaaloo.fr</a></p>
        <Footer></Footer>
        </>
    );
}
