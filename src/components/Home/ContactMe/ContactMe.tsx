"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from '@/components/ui/moving-border';
import Lottie from "lottie-react";
import { LOTTIECONTACT } from "@/assets";
import toast, { Toaster } from 'react-hot-toast';

const ContactMe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [otpValues, setOtpValues] = useState(["", "", "", ""]);
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [countdown, setCountdown] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(true);

    const otpInputs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showOtpInput && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);
        }

        if (countdown === 0) {
            setIsResendDisabled(false);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [showOtpInput, countdown]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!showOtpInput) {
            await sendOtp();
        }
    };

    const sendOtp = async () => {
        try {
            const response = await fetch('/api/Home/generateOtp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            
            if (response.ok) {
                setShowOtpInput(true);
                setCountdown(60);
                setIsResendDisabled(true);
                toast.success("OTP sent to your email. Please check and enter it below.", {
                    style: {
                        background: '#3b82f6',
                        color: '#fff',
                    },
                });
            } else {
                toast.error("Failed to send OTP. Please try again.", {
                    style: {
                        background: '#ef4444',
                        color: '#fff',
                    },
                });
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Error sending OTP. Please try again later.", {
                style: {
                    background: '#ef4444',
                    color: '#fff',
                },
            });
        }
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) value = value[0];
        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);

        // Move to next input if value is entered
        if (value && index < 3) {
            otpInputs[index + 1].current?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otpValues[index] && index > 0) {
            otpInputs[index - 1].current?.focus();
        }
    };

    const verifyOtpAndSendEmail = async () => {
        // Validate OTP is complete
        if (otpValues.some(value => value === "")) {
            toast.error("Please enter the complete OTP", {
                style: {
                    background: '#ef4444',
                    color: '#fff',
                },
            });
            return;
        }

        const formData = { 
            name, 
            email, 
            message, 
            otp: otpValues.join("") 
        };

        try {
            const response = await fetch('/api/Home/contactme', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                toast.success("Email sent successfully!", {
                    style: {
                        background: '#22c55e',
                        color: '#fff',
                    },
                });
                setName("");
                setEmail("");
                setMessage("");
                setOtpValues(["", "", "", ""]);
                setShowOtpInput(false);
                setCountdown(60);
                setIsResendDisabled(true);
            } else {
                const data = await response.json();
                toast.error(data.error || "Invalid OTP. Please try again.", {
                    style: {
                        background: '#ef4444',
                        color: '#fff',
                    },
                });
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Error sending email. Please try again later.", {
                style: {
                    background: '#ef4444',
                    color: '#fff',
                },
            });
        }
    };

    const handleResendOtp = async () => {
        await sendOtp();
    };

    return (
        <div className="bg-bgcolor flex flex-col items-center justify-center min-h-screen px-5">
            <Toaster position="top-center" reverseOrder={false} />
            <h1 className="text-heading-large font-inter text-dark-heading pb-12 text-center">
                Contact Me
            </h1>
            <form onSubmit={handleSubmit} className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col space-y-6">
                    <input
                        name="name"
                        type="text" 
                        placeholder="Roronoa Zoro" 
                        onChange={(e) => setName(e.target.value)} 
                        value={name}
                        className="w-full p-4 border rounded-lg text-black bg-white dark:bg-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25F5F5] transition-all duration-300 ease-in-out shadow-md"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="zoro@lost.com"
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                        className="w-full p-4 border rounded-lg text-black bg-white dark:bg-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25F5F5] transition-all duration-300 ease-in-out shadow-md"
                    />
                    <textarea
                        className="w-full p-4 border rounded-lg text-black bg-white dark:bg-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25F5F5] resize-none shadow-md transition-all duration-300 ease-in-out"
                        placeholder="Type whatever you want ... but let it be professional and important"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {showOtpInput ? (
                        <div className="space-y-4">
                            <div className="flex justify-between gap-2">
                                {[0, 1, 2, 3].map((index) => (
                                    <input
                                        key={index}
                                        ref={otpInputs[index]}
                                        type="text"
                                        maxLength={1}
                                        value={otpValues[index]}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        className="w-16 h-16 text-center text-2xl border rounded-lg text-black bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#25F5F5] transition-all duration-300 ease-in-out shadow-md"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between items-center space-x-4">
                                <button
                                    type="button"
                                    onClick={verifyOtpAndSendEmail}
                                    className="flex-1 bg-[#25F5F5] text-black dark:bg-slate-900 dark:text-white p-3 rounded-lg font-semibold hover:bg-[#1ee5e5] dark:hover:bg-slate-800 transition-colors duration-300"
                                >
                                    Verify OTP & Send
                                </button>
                                <button
                                    type="button"
                                    onClick={handleResendOtp}
                                    disabled={isResendDisabled}
                                    className="flex-1 bg-gray-200 text-black dark:bg-gray-700 dark:text-white p-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Resend OTP {countdown > 0 && `(${countdown}s)`}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Button
                            type="submit"
                            borderRadius="1.75rem"
                            className="bg-[#25F5F5] dark:bg-slate-900 text-black dark:text-white dark:border-slate-800 w-full"
                        >
                            Get OTP
                        </Button>
                    )}
                </div>
                <div className="flex justify-center lg:justify-end">
                    <Lottie 
                        animationData={LOTTIECONTACT} 
                        loop={true} 
                        className="h-64 w-64 lg:h-80 lg:w-80" 
                    />
                </div>
            </form>
        </div>
    );
};

export default ContactMe;
