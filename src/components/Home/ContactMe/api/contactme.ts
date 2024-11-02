// pages/api/contact.ts
import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS, 
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD, 
            },
        });

        const mailOptions = {
            from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
            to: process.env.NEXT_PUBLIC_GMAIL, 
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
