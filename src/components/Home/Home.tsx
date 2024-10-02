import MySkills from "./MySkills/MySkills";
import { MyGuidingValues } from './MyGuidingValues/MyGuidingValues';
import HeroSection from "./HeroSection/HeroSection";
import { TimelineDemo } from "./MyEducation/MyEducation";

const Home = () => {
    return(
        <div>
          <HeroSection />
          <MyGuidingValues />
          <TimelineDemo />
          <MySkills />
          
          
        </div>
    )
}

export default Home;