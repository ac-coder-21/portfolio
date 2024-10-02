"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Lottie from "lottie-react";
import {LOTTIETHINK} from "@/assets"

export function TimelineDemo() {
  const data = [
    {
      title: "Diploma in CSE",
      content: (
      <div className="timeline-item text-white">
        <div className="timeline-content">
          <h3 className="timeline-title text-lg md:text-xl font-semibold mb-4">
            Diploma in Computer Science Engineering
          </h3>
          
          <p className="timeline-duration text-sm md:text-base font-normal mb-4">
            <strong>Duration:</strong> 2019-2021
          </p>
          
          <p className="timeline-college text-sm md:text-base font-normal mb-4">
            <strong>College Name:</strong> AC Patil College of Engineering, Kharghar
          </p>
          
          <p className="timeline-marks text-sm md:text-base font-normal mb-4">
            <strong>Marks Obtained:</strong> 92.11%
          </p>
          
          <p className="timeline-description text-sm md:text-base font-normal mb-4">
            During my Diploma in Computer Science Engineering, I gained a solid foundation in programming languages and honed my skills in data structures and algorithms (DSA). Additionally, I completed an internship in cybersecurity, applying my knowledge to real-world situations and deepening my understanding of how to protect information systems from various threats.
          </p>
        </div>
      </div>

      ),
    },
    {
      title: "B.E. in CSE",
      content: (
        <div className="timeline-item text-white">
        <div className="timeline-content">
          <h3 className="timeline-title text-lg md:text-xl font-semibold mb-4">
            Bachelor of Engineering in Computer Science
          </h3>
          
          <p className="timeline-duration text-sm md:text-base font-normal mb-4">
            <strong>Duration:</strong> 2021-2024
          </p>
          
          <p className="timeline-college text-sm md:text-base font-normal mb-4">
            <strong>College Name:</strong> Lokmanya Tilak College of Engineering, Koparkhairane
          </p>
          
          <p className="timeline-marks text-sm md:text-base font-normal mb-4">
            <strong>Marks Obtained:</strong> 9.14 CGPA
          </p>
          
          <p className="timeline-description text-sm md:text-base font-normal mb-4">
            During my Bachelor’s in Computer Science Engineering, I continued building on the foundations of programming languages, data structures, and algorithms (DSA). I also gained valuable experience through an internship in cybersecurity, where I applied theoretical knowledge to practical situations and strengthened my understanding of information security practices.
          </p>
        </div>
      </div>

      ),
    },
    {
      title: "Planning for Masters",
      content: (
        <div className="text-white">
          <div>
            <Lottie animationData={LOTTIETHINK} loop={true} height={200} width={200}/>
          </div>
         
        </div>
      ),
    },
  ];
  return (
    <div className="w-full overflow-hidden">
      <Timeline data={data} />
    </div>
  );
}
