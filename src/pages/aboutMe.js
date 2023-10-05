import { SplitScreen, BorderFrame } from "../components/SpliScreen";
import { AboutMePageContent } from "../components/contents";
import { HorLineBar } from "../components/shapes";

const OpenPDF = () => {
    return;
}
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
                <button className="submit-button" onClick={OpenPDF}>Resume</button>
                <div className='aboutMe-tag-container'>
                    <a className="aboutMe-contact-tags submit-button" href="https://www.google.com/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i> </a>
                    <a className="aboutMe-contact-tags submit-button" href="https://www.google.com/" target="_blank" rel="noreferrer"><i className="fa fa-github fa-3x" aria-hidden="true"></i> </a>
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