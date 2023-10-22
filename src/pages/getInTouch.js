import { SplitScreen } from "../components/SpliScreen";
import { ContactEmail, ContactTel } from "../components/contents";
import { HorLineBar } from "../components/shapes";
import { ContactForm } from "../components/contactForm";
import Image1 from "../images/dark-bye-work-profile.png";
import Image2 from "../images/closing_image.png";

import { LazyLoadImage } from "react-lazy-load-image-component";


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
                <LazyLoadImage src={Image1} className="bye-image"
                    alt="Profile picture"
                />
            </div>
            <ContactInfo info={ContactTel}>
                <div className="getInTouch-call-icons">
                    <i className="fa fa-phone decor-icons" aria-hidden="true"></i>
                    <i className="fa fa-whatsapp decor-icons" aria-hidden="true"></i>
                    <i className="fa fa-telegram decor-icons" aria-hidden="true"></i>
                    <div className="getIntouch-tag-type">Call / Text</div>
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
            <LazyLoadImage src={Image2} className="flower-image"
                alt="Flower picture"
            />
        </div>
    );
}

const ContactPage = () => {
    return(
        <SplitScreen leftWeight={1} rightWeight={1} className={'margined-page wrapped-page'} id={'getInTouch-center-container'}>
            <ColumnOne />
            <ColumnTwo />
        </SplitScreen>
    );
}

export default ContactPage;