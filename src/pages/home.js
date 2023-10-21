import { HorLineBar } from "../components/shapes";
import { AboutMePageContent } from "../components/contents";
import DocumentPDF from '../Ashenafi_resume_software_developer.pdf';
import Image1 from "../images/dark-work-profile.png";

import { LazyLoadImage } from "react-lazy-load-image-component";


const HomePage = () => {
    return (
        <div className='margined-page home-page'>
            {/* GREETING AND HORIZONTAL LINE */}
            <div className="aboutMe-greeting-container">
                <div className="aboutMe-greeting">Hi, I am</div>
                <HorLineBar />
            </div>
            {/* NAME, PROFILE DESCRIPTION AND LINKS: RESUME AND SOCIAL MEDIA*/}
            <div className="aboutMe-profile_desc">
                <div className="aboutMe-author"><span style={{color:'white'}}>Mariamawit</span> Ashenafi</div>
                <div className="normal_text" id="aboutMe-desc"  dangerouslySetInnerHTML= {{ __html : AboutMePageContent }}/>
                <div className="aboutMe-contact-container">      
                    <a
                    href={DocumentPDF}
                    download="Resume_Ashenafi"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <button className="submit-button" id="aboutMe-resume">Resume</button>
                    </a>
                    <div className='aboutMe-tag-container'>
                        <a className="aboutMe-contact-tags submit-button" href="https://www.linkedin.com/in/mariamawit-ashenafi/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i> </a>
                        <a className="aboutMe-contact-tags submit-button" href="https://github.com/Menigedegna/" target="_blank" rel="noreferrer"><i className="fa fa-github fa-3x" aria-hidden="true"></i> </a>
                    </div>
                </div>
            </div>
            {/* PROFILE IMAGE */}
            <LazyLoadImage src={Image1} className="home-photo-container" alt="Profile picture"/>
            {/* DOCUMENT TITLE AND HORIZONTAL LINE */}
            <div className="aboutMe-document-closing">
                <HorLineBar id='horizontal-line-home' />
                <div className="title-tag">
                    <div className="aboutMe-greeting" id="aboutMe-greeting-closing">Welcome to my</div>
                    <div className="career-path">Portfolio</div>
                </div> 
            </div>
        </div>
    );
}

export default HomePage;