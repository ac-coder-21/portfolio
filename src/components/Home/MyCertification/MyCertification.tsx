"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function MyCertification() {
  const router = useRouter();
  
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
    <div className="flex flex-col justify-center items-center min-h-screen py-10 px-4 md:px-20 dark:bg-gray-900">
      <h1 className="text-heading-large font-inter text-light-heading pb-10 text-center text-[3rem] md:text-[4rem]">
        My Certificates
      </h1>
      <div className="flex flex-wrap gap-4 items-center justify-center max-w-full">
        {certificates.map((certificate, index) => (
          <DirectionAwareHover
            key={index}
            imageUrl={certificate.imageUrl}
            className="flex-1 min-w-[200px] max-w-[300px] p-4"
          >
            <p className="font-bold text-xl text-center">{certificate.text}</p>
          </DirectionAwareHover>
        ))}
      </div>
      <button
        onClick={() => router.push('/certificates')}
        className="mt-8 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
      >
        View All Certificates
      </button>
    </div>
  );
}
