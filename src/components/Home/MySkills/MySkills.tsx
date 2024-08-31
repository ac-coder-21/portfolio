"use client";
import { technologies } from '@/temp';
import BallCanvas from '@/components/Canvas/Ball';

const MySkills = () => {
    return (
        <div className='bg-bgcolor flex flex-col items-center pt-10 pb-10'>
            <h1 className='text-heading-large font-inter text-dark-heading pb-10'>
                My Skills
            </h1>
            <div className='flex flex-row flex-wrap justify-center gap-10 px-4 sm:px-10 lg:px-20'>
                {technologies.map((technology) => (
                    <div className='w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MySkills;
