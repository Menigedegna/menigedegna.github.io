import Image1 from "../images/404_work-profile.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NotFoundPage = () => 
    (
        <div className="PageNotFound_photo_container">
            <LazyLoadImage src={Image1} className="PageNotFound_photo_container-photo" alt="404 picture"/>
        </div>
    );

export default NotFoundPage