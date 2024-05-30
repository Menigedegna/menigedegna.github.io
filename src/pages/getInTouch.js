// import { SplitScreen } from "../components/SpliScreen";
import { ContactEmail, ContactTel, ContactLinkedin, ContactGit } from "../components/contents";
import Image1 from "../images/dark-bye-work-profile.png";
// import Image2 from "../images/closing_image.png";

import { LazyLoadImage } from "react-lazy-load-image-component";


const ContactInfo = ({children, info}) => {
    return(
        <div className="getInTouch-contact-info">
            <td><div className="getInTouch-tag">{children}</div></td>
            <td><div className="getInTouch-info">{info}</div></td>
        </div>
    );
}


const ColumnOne = () => {
    return(
        <div className="getInTouch-column">
            {/* <div className="getInTouch-photo-container">
                <LazyLoadImage src={Image1} className="bye-image"
                    alt="Profile picture"
                />
            </div> */}
            <div className="getIntouchAction">Get In Touch</div>
            <table>
                <tr>
                    <ContactInfo info={ContactTel}>
                        <div className="getInTouch-call-icons">
                            <i className="fa fa-phone decor-icons" aria-hidden="true"></i>
                            <i className="fa fa-whatsapp decor-icons" aria-hidden="true"></i>
                            <i className="fa fa-telegram decor-icons" aria-hidden="true"></i>
                            {/* <div className="getIntouch-tag-type">Call / Message</div> */}
                        </div>
                    </ContactInfo>
                </tr>
                
                <tr><ContactInfo info={ContactEmail}>
                    <div className="getInTouch-call-icons">
                        <i className="fa fa-envelope decor-icons" aria-hidden="true"></i>
                        {/* <div className="getIntouch-tag-type">Email</div> */}
                    </div>
                </ContactInfo></tr>
                <tr><ContactInfo info={ContactLinkedin}>
                    <div className="getInTouch-call-icons">
                        <i className="fa fa-linkedin-square decor-icons" aria-hidden="true"></i>
                        {/* <div className="getIntouch-tag-type">Connect</div> */}
                    </div>
                </ContactInfo></tr>
                <tr><ContactInfo info={ContactGit}>
                    <div className="getInTouch-call-icons">
                        <i className="fa fa-github decor-icons" aria-hidden="true"></i>
                        {/* <div className="getIntouch-tag-type">Connect</div> */}
                    </div>
                </ContactInfo></tr>
            </table>
        </div>
    );
}

// const ColumnTwo = () => {
//     return(
//         <div className="getInTouch-column" id="column-right">
//             <LazyLoadImage src={Image2} className="flower-image"
//                 alt="Flower picture"
//             />
//         </div>
//     );
// }

// const ContactPage = () => {
//     return(
//         <SplitScreen leftWeight={1} rightWeight={1} className={'margined-page wrapped-page'} id={'getInTouch-center-container'}>
//             <ColumnOne />
//             <ColumnTwo />
//         </SplitScreen>
//     );
// }

const ContactPage = () => {
    return (
        <div className='margined-page wrapped-page' id="getInTouch-center-container">
            <LazyLoadImage src={Image1} className="business-card-image"
                alt="bee image"
            />
            <ColumnOne />    
        </div>
)}

export default ContactPage;