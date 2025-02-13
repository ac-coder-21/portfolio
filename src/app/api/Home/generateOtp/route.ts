import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

export async function POST(req: Request) {
    const { email } = await req.json();
    const otp = generateOTP();

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        },
    });

    const otpMail = {
        from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        to: email,
        subject: 'Your OTP for Contact Form',
        text: `Your OTP is: ${otp}. Please use this to submit your contact form. This OTP is valid for 1 minute.`,
    };

    try {
        await transporter.sendMail(otpMail);
        // In a real application, you'd want to store this OTP securely, possibly in a database
        // For this example, we'll send it back to the client, but in practice, you should never do this
        return NextResponse.json({ message: 'OTP sent successfully' }, { status: 200 });
    } catch (error) {
        console.error("Error sending OTP:", error);
        return NextResponse.json({ error: 'Error sending OTP' }, { status: 500 });
    }
}
