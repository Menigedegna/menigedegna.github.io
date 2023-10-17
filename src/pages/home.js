import { SplitScreen, HorizSplitScreen } from "../components/SpliScreen";
// import { LineBar, HorLineBar } from "../components/shapes";
import { HorLineBar } from "../components/shapes";
import { AboutMePageContent } from "../components/contents";
import DocumentPDF from '../Ashenafi_resume_software_developer.pdf';
import Image1 from "../images/dark-work-profile.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

const IMAGE_HEIGHT = 400;


const UpperLeftHandComponent = () => {
    return (
        <div className="aboutMe-left-screen">
            <div className='aboutMe-title'>
                <div className="aboutMe-title-container">
                    <div className="aboutMe-title">Hi, I am</div>
                    <HorLineBar />
                </div>
                <div className="aboutMe-author"><span style={{color:'var(--color-red)'}}>Mariamawit</span> Ashenafi</div>
            </div>
            <div className="normal_text" id="aboutMe-text"  dangerouslySetInnerHTML= {{ __html : AboutMePageContent }}/>
            <div className="aboutMe-contact-container">      
                <a
                href={DocumentPDF}
                download="Resume_Ashenafi"
                target="_blank"
                rel="noreferrer"
                >
                    <button className="submit-button">Resume</button>
                </a>
                <div className='aboutMe-tag-container'>
                    <a className="aboutMe-contact-tags submit-button" href="https://www.linkedin.com/in/mariamawit-ashenafi/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i> </a>
                    <a className="aboutMe-contact-tags submit-button" href="https://github.com/Menigedegna/" target="_blank" rel="noreferrer"><i className="fa fa-github fa-3x" aria-hidden="true"></i> </a>
                </div>

            </div>
        </div>
    )
}
    
    
const TitleTag = () => {
    return (
        <div className="title-tag">
            <div className="aboutMe-title">Welcome to my</div>
            <div className="career-path">Portfolio</div>
        </div>
    )
}

const LeftHandComponent = () => {
    return (
        <HorizSplitScreen topWeight={3} bottomWeight={4} className={"home-left-screen"}>
            <UpperLeftHandComponent />
            <TitleTag />
        </HorizSplitScreen>
    )
  }

const RightHandComponent = () => {
    return (
        <div className="home-right-screen">
            <LazyLoadImage src={Image1} className="home-photo-container" height={IMAGE_HEIGHT}
                alt="Screenshot of product"
            />
            <HorLineBar id='horizontal-line-home' />

        </div>

    )
  }



const HomePage = () => {
    return (
        <SplitScreen leftWeight={5} rightWeight={6} className='framed-page home-page'>
            <LeftHandComponent />
            <RightHandComponent />
        </SplitScreen>
    );
}

export default HomePage;