import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { RiThreadsLine } from 'react-icons/ri';
import { SiCoursera } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6'

const MySocials: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-between mx-auto px-6 md:px-20 my-52">
      {/* Added margin-left to shift the heading to the right */}
      <h1 className="text-heading-large font-inter text-light-heading pb-10 text-center sm:text-[3rem] md:text-[4rem] ml-6 md:ml-10">
        My Socials
      </h1>
      {/* Added margin-right to shift the icons to the left and padding for spacing inside the icons */}
      <div className="flex space-x-6 text-6xl text-gray-700 mr-6 md:mr-10">
        <a href="https://www.linkedin.com/in/amogh-chavan-21-coder/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="p-2 hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://github.com/ac-coder-21" target="_blank" rel="noopener noreferrer">
          <FaGithub className="p-2 hover:text-gray-900 transition-colors" />
        </a>
        <a href="https://www.instagram.com/ac21.gg/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="p-2 hover:text-pink-500 transition-colors" />
        </a>
        <a href="https://www.threads.net/@ac21.gg" target="_blank" rel="noopener noreferrer">
          <RiThreadsLine className="p-2 hover:text-black transition-colors" />
        </a>
        <a href="https://www.coursera.org/user/58767d9136a9e5f3cf671c42ef2d3b1f" target="_blank" rel="noopener noreferrer">
          <SiCoursera className="p-2 hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://x.com/ac_coder21" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="p-2 hover:text-black transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default MySocials;
