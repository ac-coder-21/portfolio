import MySkills from "./MySkills/MySkills";
import { MyGuidingValues } from './MyGuidingValues/MyGuidingValues';
import { MyProjects } from "./MyProjects/MyProjects";
import HeroSection from "./HeroSection/HeroSection";
import { TimelineDemo } from "./MyEducation/MyEducation";
import { MyCertification } from "./MyCertification/MyCertification";

const Home = () => {
    return(
        <div>
          <HeroSection />
          <MyGuidingValues />
          <TimelineDemo />
          <MyProjects />
          <MySkills />
          <MyCertification />
        </div>
    )
}

export default Home;