import { experienceArray } from "../components/contents";
import Image0 from "../images/Song_Viewer.png";
import Image1 from "../images/football_players_screenshot.png";
import Image2 from "../images/XTSpotIntensity_snapshot.png";
import Image3 from "../images/crossing_turtle_screenshot.png";
import Image4 from "../images/pong_game_screenshot.png";
import Image5 from "../images/Snake_game.png";
// import HatImage from '../images/bee.png';

import { LazyLoadImage } from "react-lazy-load-image-component";
import { HorLineBar } from "../components/shapes";

const IMAGE_ARRAY = [Image0, Image1, Image2, Image3, Image4, Image5]

const GalleryLoader = ({image, id, arr}) =>{
    return(
        <div className="experience-column" id={id}>
            <LazyLoadImage src={image} className="experience-image"
                alt="Screenshot of product"
            />
            <div className="experience-ShowMe">{">  Show Me  <"}</div>
            <div className="experience-image-text">
                <div className="experience-position">{arr.position}</div>
                {/* <HorLineBar id="experience-horLine"/> */}
                <div className="experience-skill-container">
                    {arr.skills.map((item, key) => <div key={item.id} className="experience-code-tag">{item}</div>)}
                </div>
                <div className="experience-company">{arr.company}</div>
                <div className="experience-date">({arr.date})</div>
                <div className="experience-desc" dangerouslySetInnerHTML= {{ __html : arr.description }}/>
                <a className="experience-button" href={arr.exLink} target="_blank" rel="noreferrer">View</a>
            </div>
        </div>   
    );

}

const ExperiencePage = () => {
    return (
        <div className='margined-page wrapped-page experienc-main-container'>
            {/* <div className='experience-hat-container'>
                <LazyLoadImage src={HatImage} className="experience-hat-pic"
                    alt="hat picture"
                />       
            </div> */}
            {experienceArray.map((item, id) => (
            <div class="hexagon-container">
                <div class="hexagon-frame"></div>
                    <GalleryLoader 
                        image={IMAGE_ARRAY[id]}
                        arr={item}/>         
            </div>
            ))}
        </div>
    );
}

export default ExperiencePage;