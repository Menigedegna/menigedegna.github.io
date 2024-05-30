// import { HorLineBar } from "../components/shapes";
import { AboutMeList } from "../components/contents";
import DocumentPDF from '../Ashenafi_resume.pdf';
import { ContactLinkedin, ContactGit } from "../components/contents";

// import Image1 from "../images/dark-work-profile.png";
import Image1 from "../images/profile.jpeg";


import { LazyLoadImage } from "react-lazy-load-image-component";


const HomePage = () => {
    return (
        <div className='margined-page home-page'>

            {/* <div className="aboutMe-profile_desc"> */}

            {/* GREETING*/}
            <div className="aboutMe-greeting-container">
                    {/* PROFILE IMAGE */}
                    <div className="profile-image-container">
                        <LazyLoadImage src={Image1} className="home-photo-container" alt="Profile picture"/>
                    </div>
                    <div className="aboutMe-header">
                        <div className="aboutMe-greeting">Hi, I'm Mariamawit S. Ashenafi</div>
                        <div className="aboutMe-author"><span className="firstName">Welcome to my Portfolio</span> </div>
                    </div>

                </div>
 
                {/* DESCRIPTION */}
                {/* <div id="aboutMe-desc" >
                    {AboutMeList.map((item, ind) => (
                        <div className="aboutMe-par" id={"aboutMe-num-"+ind}>
                            {ind<3 && <div className="aboutMe-num" >0{ind+1}</div>}
                            <div className={ind<3?"aboutMe-text":"aboutMe-goal"}  dangerouslySetInnerHTML= {{ __html : item }}/>
                        </div>                   
                    ))}
                </div> */}
                <div className="aboutMe-par" id={"aboutMe-desc"}>
                    {AboutMeList.map((item, ind) => (
                            <p className={ind<5?"aboutMe-text":"aboutMe-goal"}>{item}</p>
                    ))}
                </div>

                {/* CONTACT INFO */}
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
                    <a className="aboutMe-contact-tags submit-button" href={ContactLinkedin} target="_blank" rel="noreferrer">
                        <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i> 
                    </a>
                    <a className="aboutMe-contact-tags submit-button" href={ContactGit} target="_blank" rel="noreferrer">
                        <i className="fa fa-github fa-3x" aria-hidden="true"></i> 
                    </a>
                </div>
            {/* </div> */}

        </div>

    );
}

export default HomePage;