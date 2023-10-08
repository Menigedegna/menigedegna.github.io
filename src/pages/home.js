import { SplitScreen, HorizSplitScreen } from "../components/SpliScreen";
import { LineBar, HorLineBar } from "../components/shapes";
import Image1 from "../images/dark-work-profile.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

const IMAGE_WIDTH = 720;
const IMAGE_HEIGHT = 470;


const NameTag = () => {
    return(
        <div className='name-tag'>
            <LineBar id='author-bar'></LineBar>
            <div id='author-name'>Mariamawit<br/>S. Ashenafi</div>
        </div>
    )
}
    
    
const TitleTag = () => {
    return (
        <div className="title-tag">
            <div className="career-path">Full Stack Developer</div>
            <div className="doc-title">Portfolio</div>
        </div>
    )
}

const LeftHandComponent = () => {
    return (
        <HorizSplitScreen topWeight={3} bottomWeight={4} className={"home-left-screen"}>
            <NameTag/>
            <TitleTag />
        </HorizSplitScreen>
    )
  }

const RightHandComponent = () => {
    return (
        <div className="home-right-screen">
            <div className="home-photo-container">
                    <LazyLoadImage src={Image1} className="experience-image"
                        width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                        alt="Screenshot of product"
                    />
            </div>
            <HorLineBar id='horizontal-line-home' />

        </div>

    )
  }



const HomePage = () => {
    return (
        <SplitScreen leftWeight={5} rightWeight={6} className='framed-page'>
            <LeftHandComponent />
            <RightHandComponent />
        </SplitScreen>
    );
}

export default HomePage;