import MySkills from "./MySkills/MySkills";
import { MyGuidingValues } from './MyGuidingValues/MyGuidingValues';
import { MyProjects } from "./MyProjects/MyProjects";
import HeroSection from "./HeroSection/HeroSection";
import { TimelineDemo } from "./MyEducation/MyEducation";

const Home = () => {
    return(
        <div>
          <HeroSection />
          <MyGuidingValues />
          <TimelineDemo />
          <MyProjects />
          <MySkills />
          
          
        </div>
    )
}

export default Home;