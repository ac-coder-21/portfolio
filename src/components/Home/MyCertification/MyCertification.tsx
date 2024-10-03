"use client";
import React from "react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function MyCertification() {
  const certificates = [
    {
      imageUrl: "Portfolio/certificates/SPRKML",
      text: "Machine Learning at SPRK Technologies",
    },
    {
      imageUrl: "Portfolio/certificates/IBM_DS_Methodology",
      text: "IBM Data Science Methodology by Coursera",
    },
    {
      imageUrl: "Portfolio/certificates/Tata",
      text: "Tata Data Visualisation",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen dark:bg-gray-900">
      <h1 className="text-heading-large font-inter text-light-heading pb-10 text-center text-[2rem] sm:text-[3rem] md:text-[4rem]">
        My Certificates
      </h1>
      <div className="flex flex-wrap space-x-6 items-center justify-center h-[40rem]">
        {certificates.map((certificate, index) => (
          <DirectionAwareHover key={index} imageUrl={certificate.imageUrl} className="flex-1 min-w-[200px]">
            <p className="font-bold text-xl text-center">{certificate.text}</p>
          </DirectionAwareHover>
        ))}
      </div>
    </div>
  );
}
