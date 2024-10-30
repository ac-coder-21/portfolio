import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { RiThreadsLine } from 'react-icons/ri';
import { SiCoursera } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link';

const MySocials: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-between max-w-full mx-auto px-4 md:px-20 my-24">
      <h1 className="text-heading-large font-inter text-light-heading pb-6 text-center sm:text-2xl md:text-3xl ml-4 md:ml-10">
        My Socials
      </h1>
      <div className="flex flex-wrap space-x-4 text-4xl md:text-6xl text-gray-700 mx-4 md:mx-10">
        <Link href="https://www.linkedin.com/in/amogh-chavan-21-coder/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="p-1 hover:text-blue-600 transition-colors" />
        </Link>
        <Link href="https://github.com/ac-coder-21" target="_blank" rel="noopener noreferrer">
          <FaGithub className="p-1 hover:text-gray-900 transition-colors" />
        </Link>
        <Link href="https://www.instagram.com/ac21.gg/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="p-1 hover:text-pink-500 transition-colors" />
        </Link>
        <Link href="https://www.threads.net/@ac21.gg" target="_blank" rel="noopener noreferrer">
          <RiThreadsLine className="p-1 hover:text-black transition-colors" />
        </Link>
        <Link href="https://www.coursera.org/user/58767d9136a9e5f3cf671c42ef2d3b1f" target="_blank" rel="noopener noreferrer">
          <SiCoursera className="p-1 hover:text-blue-500 transition-colors" />
        </Link>
        <Link href="https://x.com/ac_coder21" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="p-1 hover:text-black transition-colors" />
        </Link>
      </div>
    </div>
  );
};

export default MySocials;
