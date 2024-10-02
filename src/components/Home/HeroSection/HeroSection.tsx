"use client";
import React from 'react';
import { CldImage } from 'next-cloudinary';
import { Button } from '@/components/ui/moving-border';
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FlipWords } from '@/components/ui/flip-words';

const HeroSection: React.FC = () => {

  const abilities = ["Data Science", "NLP", "Model Building", "Computer Vision","Full Stack Development", "Database",]
  
  return (
    <div className="bg-[#0F0F1F] h-screen flex flex-col justify-center items-center text-white">
      
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-32">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/3 w-full px-4">
          <h1 className="text-5xl font-bold mb-4">Hello, I’m Amogh</h1>
          <h2 className="text-3xl mb-6">I can do <FlipWords words={abilities} /> </h2>
          <p className="text-lg text-gray-400 mb-6">
          I'm Amogh Chavan, a Data Science and Machine Learning engineer, focused on analytics and data modeling to extract insights and drive decisions.
          </p>
          <Button borderRadius="1.75rem" className="bg-[#25F5F5] dark:bg-slate-900 text-black dark:text-white  dark:border-slate-800">
            Contact Me
          </Button>
        </div>

        {/* Image Section */}
        <div className="mt-8 lg:mt-0">
          <div className="relative w-auto h-a rounded-full border-8 border-[#25F5F5] overflow-hidden">
            <CldImage width="400" height="400" sizes='100vw' src={process.env.PROFILE_PIC} alt='profile pic' />
          </div>
        </div>
      </div>
      
      
        <ShootingStars />
        <StarsBackground />
    </div>
  );
};

export default HeroSection;
