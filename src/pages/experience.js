import { experienceArray } from "../components/contents";
import Image1 from "../images/silver_lining.png";
import Image2 from "../images/XTSpotIntensity_snapshot.png";
import Image3 from "../images/crossing_turtle_screenshot.png";
import Image4 from "../images/pong_game_screenshot.png";
import Image5 from "../images/Snake_game.png";


import { LazyLoadImage } from "react-lazy-load-image-component";
import { HorLineBar } from "../components/shapes";

const IMAGE_ARRAY = [Image1, Image2, Image3, Image4, Image5]

const GalleryLoader = ({image, id, arr}) =>{
    return(
        <div className="experience-column" id={id}>
            <LazyLoadImage src={image} className="experience-image"
                alt="Screenshot of product"
            />
            <div className="experience-ShowMe">{">  Show Me  <"}</div>
            <div className="experience-image-text">
                <div className="experience-position">{arr.position}</div>
                <HorLineBar id="experience-horLine"/>
                <div className="experience-skill-container">
                    {arr.skills.map((item, key) => <div key={item.id} className="experience-code-tag">{item}</div>)}
                </div>
                <div className="experience-company">{arr.company}</div>
                <div className="experience-date">({arr.date})</div>
                <div className="experience-desc">{arr.description}</div>
                <a className="experience-button" href={arr.exLink} target="_blank" rel="noreferrer">View</a>
            </div>
        </div>   
    );

}

const ExperiencePage = () => {
    return (
        <div className='margined-page wrapped-page experienc-main-container'>
            {experienceArray.map((item, id) => (
            <div className="experience-column">
                <GalleryLoader 
                    id={`'column'${id}`} 
                    image={IMAGE_ARRAY[id]}
                    arr={item}/>         
            </div>
            ))}
        </div>
    );
}

export default ExperiencePage;