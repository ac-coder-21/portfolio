"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Button } from '@/components/ui/moving-border';
import Lottie from "lottie-react";
import { LOTTIECONTACT } from "@/assets";

const ContactMe = () => {

    const name = ["Amogh Chavan", "Daniel Ricciardo", "Roronoa Zoro", "I hope you have a name!!"];
    const email = ["amogh.chavan.21@gmail.com", "daniel@notf1.com", "zoro@lost.com", "I hope you have an email address"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return (
        <div className="bg-bgcolor flex flex-col items-center justify-center min-h-screen px-5">
            <h1 className="text-heading-large font-inter text-dark-heading pb-12 text-center">
                Contact Me
            </h1>
            <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col space-y-6"> {/* Increased space between form elements */}
                    <PlaceholdersAndVanishInput placeholders={name} onChange={handleChange} />
                    <PlaceholdersAndVanishInput placeholders={email} onChange={handleChange} />
                    <textarea 
                        className="p-4 border rounded-lg resize-none text-black placeholder:text-gray-500 dark:placeholder:text-gray-400 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#25F5F5]"
                        placeholder="Type whatever you want ... but let it be professional and important"
                        rows={4}
                    ></textarea>
                    <Button 
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
            </div>
        </div>
    );
};

export default ContactMe;
