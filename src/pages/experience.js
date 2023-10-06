// TODO: CREATE WEB APP FOR PASSWORD MANAGER

import { BorderFrame } from "../components/SpliScreen";
import { experienceArray } from "../components/contents";
import Image1 from "../images/silver_lining.png";
import Image2 from "../images/XTSpotIntensity_snapshot.png";
// import Image3 from "../images/XT.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { HorLineBar } from "../components/shapes";

const IMAGE_WIDTH = 520 - 20;
const IMAGE_HEIGHT = 350;
const IMAGE_ARRAY = [Image1, Image2, Image2, Image2, Image2]

const GalleryLoader = ({image, id, arr}) =>{
    return(
        <div className="experience-column" id={id}>
            <LazyLoadImage src={image} className="experience-image"
                width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                alt="Screenshot of product"
            />
            <div className="experience-image-text">
                <div className="experience-position">{arr.position}</div>
                <HorLineBar/>
                <div className="experience-skill-container">
                    {arr.skills.map((item, key) => <div key={item.id} className="experience-code-tag">{item}</div>)}
                </div>
                <div className="experience-company">{arr.company}</div>
                <div className="experience-date">({arr.date})</div>
                <div className="experience-desc">{arr.description}</div>
                <a className="experience-button" href={arr.exLink}>View</a>
            </div>
        </div>   
    );

}

// const ColumnsOneTwo = () =>{
//     return(
//         <SplitScreen leftWeight={1} rightWeight={1} className={'column-split'}>
//             <GalleryLoader 
//                 id="column1" 
//                 image={Image1} 
//                 imageAlt="Screenshot: Company website"
//                 appType="WEBAPP"
//                 progList={["HTML5", 'CSS', 'FLASK']}/>
//             <GalleryLoader 
//                 id="column2" 
//                 image={Image2} 
//                 imageAlt="Screenshot: Image processing plugin"
//                 appType="SOFTWARE"
//                 progList={["PYTHON"]}/>
//         </SplitScreen>
//     ); 
// }



// const MainContent = () => {
//     return(
//         <SplitScreen leftWeight={2} rightWeight={1} className={'column-split'}>
//             <ColumnsOneTwo />
//             <GalleryLoader 
//                 id="column2" 
//                 image={Image2} 
//                 imageAlt="Screenshot: Password Management app"
//                 appType="WEBAPP"
//                 progList={["HTML5", "CSS", "FLASK"]}/>
//         </SplitScreen>
//     );
// }

const ExperiencePage = () => {
    return (
        <BorderFrame displacement={'680%'}>
            <div className='experienc-main-container'>
                {experienceArray.map((item, id) => (
                <div className="experience-column">
                    <GalleryLoader 
                        id={`'column'${id}`} 
                        image={IMAGE_ARRAY[id]}
                        arr={item}/>         
                </div>
                ))}
            </div>
        </BorderFrame>
    );
}

export default ExperiencePage;