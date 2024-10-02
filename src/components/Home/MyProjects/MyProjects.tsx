"use client";
import React, { useState, useEffect } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { CldImage } from "next-cloudinary";

const projectsData = [
  {
    title: "Bandhu - A Mental Health Aid  with Chatbot",
    description: "Bandhu is a mental health aid project designed to help users assess stress, anxiety, depression, and other mental health issues through a chatbot. Based on user input, the bot analyzes mental health status, with the project developed and verified under the guidance of a professional mental health expert.",
    href: "https://github.com/ac-coder-21/Bandhu-A-mental-chatbot-app",
  },
  {
    title: "Drowsiness Detecion",
    description: "Built with ReactJS and TensorflowJS, this project demonstrates the power of merging frontend development with AI technology. It is developed using ReactJS PWA(Progressive Web App) functionality so that I can be installed and be ready to use on any device.",
    href: "https://github.com/ac-coder-21/Result-Analysis",
  },
  {
    title: "Result Analysis Project",
    description: "The Result Analysis System, built entirely with Python, is a comprehensive tool that simplifies and streamlines the process of analyzing academic results. It efficiently processes large datasets, generates insightful visualizations, and provides valuable statistical insights to educators and administrators.",
    href: "https://github.com/ac-coder-21/Result-Analysis",
  },
];

export function MyProjects() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen dark:bg-gray-900">
      <h1 className="text-heading-large font-inter text-light-heading pb-10">
        My Projects
      </h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-12 mx-auto px-8">
        {projectsData.map((project, index) => (
          <PinContainer key={index} title={project.href} href={project.href}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {project.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">{project.description}</span>
              </div>
              {/* Display the image using CldImage */}
              <div className="flex flex-1 w-full rounded-lg mt-4">
                
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}
