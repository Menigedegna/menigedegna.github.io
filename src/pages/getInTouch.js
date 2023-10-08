// TODO: when you buy a domain, change email

import { SplitScreen, BorderFrame } from "../components/SpliScreen";
import { ContactEmail, ContactTel } from "../components/contents";
import { HorLineBar } from "../components/shapes";
import { ContactForm } from "../components/contactForm";
import Image1 from "../images/dark-bye-work-profile.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const IMAGE_WIDTH = 650;
const IMAGE_HEIGHT = 400;

const ContactInfo = ({children, info}) => {
    return(
        <div className="getInTouch-contact-info">
            <div className="getInTouch-tag">{children}</div>
            <div className="getInTouch-info">{info}</div>
        </div>
    );
}


const ColumnOne = () => {
    return(
        <div className="getInTouch-column">
            <div className="getInTouch-photo-container">
                {/* <div className="photo-home" id="photo_4"></div> */}
                <LazyLoadImage src={Image1} className="bye-image"
                    width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                    alt="Bye image"
                />
            </div>
            <ContactInfo info={ContactTel}>
                <div className="getInTouch-call-icons">
                    <i className="fa fa-phone decor-icons" aria-hidden="true"></i>
                    <i className="fa fa-whatsapp decor-icons" aria-hidden="true"></i>
                    <i className="fa fa-telegram decor-icons" aria-hidden="true"></i>
                    <div className="getIntouch-tag-type">Call</div>
                </div>
            </ContactInfo>
            <ContactInfo info={ContactEmail}>
                <div className="getInTouch-call-icons">
                    <i className="fa fa-envelope decor-icons" aria-hidden="true"></i>
                    <div className="getIntouch-tag-type">Email</div>
                </div>
            </ContactInfo>
        </div>
    );
}

const ColumnTwo = () => {
    return(
        <div className="getInTouch-column" id="column-right">
            <div className="getInTouch-title-container">
                <div className="getInTouch-title">What's on your mind?</div>
                <HorLineBar />
            </div>
            <ContactForm />
        </div>
    );
}

const MainContent = () => {
    return(
        <SplitScreen leftWeight={1} rightWeight={1} className={'getInTouch-center-container'}>
            <ColumnOne />
            <ColumnTwo />
        </SplitScreen>
    );
}

const ContactPage = () => {
    return (
        <BorderFrame displacement={'1050%'}>
            <MainContent />
        </BorderFrame>
    );
}

export default ContactPage;