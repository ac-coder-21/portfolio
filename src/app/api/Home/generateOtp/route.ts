import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Store OTPs temporarily (in production, use a proper database)
const otpStore = new Map<string, { otp: string; timestamp: number }>();

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

export async function POST(req: Request) {
    const { email } = await req.json();
    const otp = generateOTP();

    // Store OTP with timestamp
    otpStore.set(email, { 
        otp, 
        timestamp: Date.now() 
    });

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

// Add this function to verify OTP
export function verifyOTP(email: string, userOtp: string): boolean {
    const storedData = otpStore.get(email);
    if (!storedData) return false;

    // Check if OTP is expired (1 minute validity)
    if (Date.now() - storedData.timestamp > 60000) {
        otpStore.delete(email);
        return false;
    }

    // Verify OTP
    const isValid = storedData.otp === userOtp;
    if (isValid) {
        otpStore.delete(email); // Remove used OTP
    }
    return isValid;
}
