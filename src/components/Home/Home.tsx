"use client";
import MySkills from "./MySkills/MySkills";
import { MyGuidingValues } from './MyGuidingValues/MyGuidingValues';
import { UnderContruction } from '@/assets';
import Lottie from "lottie-react";

const Home = () => {
    return(
        <div className="flex items-center justify-center w-full h-screen">
          {/* <MyGuidingValues />
          <MySkills /> */}
          <Lottie animationData={UnderContruction} loop={true} className="w-full h-full"/>
        </div>
    )
}

export default Home;
