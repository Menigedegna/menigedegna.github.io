// TODO: CREATE POP OVER FOR EACH IMAGE TO GIVE DESCRIPTION OF PROJECT AND MY ROLE IN IT + LINK
// SRC: https://medium.com/@sbeugen/writing-your-own-custom-react-hooks-in-3-simple-steps-ad4049c4114
// TODO: CREATE WEB APP FOR PASSWORD MANAGER

import { SplitScreen, BorderFrame } from "../components/SpliScreen";
// import { ExperiencePython, ExperienceJavascript, ExperienceHTML } from "../components/contents";
import Image1 from "../images/silver_lining.png";
import Image2 from "../images/XTSpotIntensity_snapshot.png";
// import Image3 from "../images/XT.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

const IMAGE_WIDTH = 525;
const IMAGE_HEIGHT = 700;

const GalleryLoader = ({image, id, imageAlt, appType, progList}) =>{
    return(
        <div className="experience-column" id={id}>
            <LazyLoadImage src={image} className="experience-image"
                width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                alt={imageAlt}
            />
            <div className="experience-image-text">
                <div className="experience-code-tag experience-app-type">{appType}</div>
                {progList.map((item, key) => <div key={item.id} className="experience-code-tag">{item}</div>)}
            </div>
        </div>   
    );

}

const ColumnsOneTwo = () =>{
    return(
        <SplitScreen leftWeight={1} rightWeight={1} className={'column-split'}>
            <GalleryLoader 
                id="column1" 
                image={Image1} 
                imageAlt="Screenshot: Company website"
                appType="WEBAPP"
                progList={["HTML5", 'CSS', 'FLASK']}/>
            <GalleryLoader 
                id="column2" 
                image={Image2} 
                imageAlt="Screenshot: Image processing plugin"
                appType="SOFTWARE"
                progList={["PYTHON"]}/>
        </SplitScreen>
    ); 
}



const MainContent = () => {
    return(
        <SplitScreen leftWeight={2} rightWeight={1} className={'column-split'}>
            <ColumnsOneTwo />
            <GalleryLoader 
                id="column2" 
                image={Image2} 
                imageAlt="Screenshot: Password Management app"
                appType="WEBAPP"
                progList={["HTML5", "CSS", "FLASK"]}/>
        </SplitScreen>
    );
}

const ExperiencePage = () => {
    return (
        <BorderFrame displacement={'680%'}>
            <MainContent />
        </BorderFrame>
    );
}

export default ExperiencePage;