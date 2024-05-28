// import { HorLineBar } from "../components/shapes";
import { AboutMeList } from "../components/contents";
import DocumentPDF from '../Ashenafi_resume.pdf';
import Image1 from "../images/dark-work-profile.png";

import { LazyLoadImage } from "react-lazy-load-image-component";


const HomePage = () => {
    return (
        <div className='margined-page home-page'>
            {/* GREETING AND HORIZONTAL LINE */}
            <div className="aboutMe-greeting-container">
                <div className="aboutMe-greeting">I am</div>
                {/*<HorLineBar />*/}
            </div>
            {/* NAME, PROFILE DESCRIPTION AND LINKS: RESUME AND SOCIAL MEDIA*/}
            <div className="aboutMe-profile_desc">
                <div className="aboutMe-author"><span className="firstName">Mariamawit</span> Ashenafi</div>
                <div id="aboutMe-desc" >
                    {AboutMeList.map((item, ind) => (
                        <div className="aboutMe-par" id={"aboutMe-num-"+ind}>
                            {ind<3 && <div className="aboutMe-num" >0{ind+1}</div>}
                            <div className={ind<3?"aboutMe-text":"aboutMe-goal"}  dangerouslySetInnerHTML= {{ __html : item }}/>
                        </div>                   
                    ))}
                </div>
                <div className="aboutMe-contact-container">      
                {/* <div className="submit-button" > */}
                    <a
                    className="aboutMe-contact-tags submit-button"
                    id="aboutMe-resume"
                    href={DocumentPDF}
                    download="Resume_Ashenafi"
                    target="_blank"
                    rel="noreferrer"
                    >Resume
                    </a>
                {/* </div> */}
                    <a className="aboutMe-contact-tags submit-button" href="https://www.linkedin.com/in/mariamawit-ashenafi/" target="_blank" rel="noreferrer">
                        <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i> 
                    </a>
                    <a className="aboutMe-contact-tags submit-button" href="https://github.com/Menigedegna/" target="_blank" rel="noreferrer">
                        <i className="fa fa-github fa-3x" aria-hidden="true"></i> 
                    </a>
                </div>
            </div>
            {/* PROFILE IMAGE */}
            <div className="profile-image-container">
                <LazyLoadImage src={Image1} className="home-photo-container" alt="Profile picture"/>
            </div>
        </div>

    );
}

export default HomePage;