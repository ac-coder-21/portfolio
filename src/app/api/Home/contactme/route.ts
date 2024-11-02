// src/app/api/Home/contactme/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS, // Your Gmail email address
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD, // Your Gmail app password
        },
    });

    const mailOptions = {
        from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        to: 'auuchavan@gmail.com', // Replace with the recipient's email
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }
}
