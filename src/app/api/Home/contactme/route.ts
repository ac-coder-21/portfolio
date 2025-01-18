import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, message, otp } = await req.json();

    // In a real application, you'd verify the OTP here
    // For this example, we'll just check if it's a 4-digit number
    if (!/^\d{4}$/.test(otp)) {
        return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        },
    });

    const contactMail = {
        from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        to: 'auuchavan@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const responseMail = {
        from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        to: email,
        subject: `Thanks for Contacting me ${name}`,
        text: `Thank you for contacting me ${name}. \nI will be replying as soon as possible. \nPlease wait for the reply and don't spam messages in contact me. \nYour Message: ${message}`
    }

    try {
        await transporter.sendMail(contactMail);
        await transporter.sendMail(responseMail);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }
}

