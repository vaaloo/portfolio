// pages/api/send-email.js

import axios from 'axios';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, subject, message } = req.body;

        const mailjetApiKeyPublic = process.env.MAILJET_PUBLIC;
        const mailjetApiKeyPrivate = process.env.MAILJET_PRIVATE;

        const data = {
            Messages: [
                {
                    From: {
                        Email: process.env.MYMAIL,
                        Name: name,
                    },
                    To: [
                        {
                            Email: process.env.MYMAIL,
                        },
                    ],
                    Subject: subject,
                    TextPart: message,
                },
            ],
        };

        const config = {
            auth: {
                username: mailjetApiKeyPublic,
                password: mailjetApiKeyPrivate,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await axios.post('https://api.mailjet.com/v3.1/send', data, config);
            console.log('E-mail envoyé avec succès:', response.data);
            res.status(200).json({ message: 'E-mail envoyé avec succès' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
            res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
        }
    } else {
        res.status(405).json({ message: 'Méthode non autorisée' });
    }
};
