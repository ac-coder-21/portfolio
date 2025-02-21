"use client";
import { useState } from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Button } from '@/components/ui/moving-border';
import Lottie from "lottie-react";
import { LOTTIECONTACT } from "@/assets";

const ContactMe = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { name, email, message };

        console.log("Sending form data:", formData);  

        try {
            const response = await fetch('/api/Home/contactme', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                alert("Email sent successfully!");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                alert("Failed to send email.");
                const errorData = await response.json();
                console.error("Server error:", errorData);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error sending email. Please try again later.");
        }
    };

    return (
        <div className="bg-bgcolor flex flex-col items-center justify-center min-h-screen px-5">
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
                    <Button
                        type="submit"
                        borderRadius="1.75rem"
                        className="bg-[#25F5F5] dark:bg-slate-900 text-black dark:text-white dark:border-slate-800 w-full"
                    >
                        Contact Me
                    </Button>
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
