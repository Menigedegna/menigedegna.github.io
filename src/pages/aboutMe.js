// TODO : CREATE AND ADD ABOUT ME VIDEO
// TODO: OR COMBINE HOME AND ABOUT ME PAGE

import { SplitScreen, BorderFrame } from "../components/SpliScreen";
import { AboutMePageContent } from "../components/contents";
import { HorLineBar } from "../components/shapes";
import DocumentPDF from '../Ashenafi_resume_software_developer.pdf';


const LeftHandComponent = () => {
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
const RightHandComponent = () => {
return (
        <div className="photo-home" id="photo_2"></div>
    )
}

const MainContent = () => {
    return(
        <SplitScreen leftWeight={5} rightWeight={5} className={'aboutMe-center-container'}>
            <LeftHandComponent />
            <RightHandComponent />
        </SplitScreen>
    );
}
const AboutMePage = () => {
    return (
        <BorderFrame displacement={'120%'}>
            <MainContent />
        </BorderFrame>

    );
}

export default AboutMePage;