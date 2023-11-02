import { SplitScreen } from "../components/SpliScreen";
import { HorLineBar } from "../components/shapes";
import { useState, useRef} from "react";
import { PersDev, ComSkill, LanguageSkill, recommendations } from "../components/contents";
import { Barplot } from "../components/Barplot";
import Image1 from "../images/profile_picture.png";
import { LazyLoadImage } from "react-lazy-load-image-component";


const BUTTONS_HEIGHT = 50;
const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 420;

const RightColumn = ({width, className, changeData, data, height}) =>{
    return(
        <div className={className}>
            <div className="work-skills_icons">
                {/* <button className="work-button" style={{opacity:data===ComSkill?1:0.7}} onClick={() => changeData(ComSkill, 500, recommendations[0])}>{"Computer Programing"}</button> */}
                <button className={data===ComSkill?"work-button-active":"work-button"} onClick={() => changeData(ComSkill, 500, recommendations[0])}>
                    <i class="fa fa-laptop fa-2x" aria-hidden="true"></i>
                </button>
                <button className={data===PersDev?"work-button-active":"work-button"} onClick={() => changeData(PersDev, 600, recommendations[1])}>
                    <i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
                </button>
                <button className={data===LanguageSkill?"work-button-active":"work-button"} onClick={() => changeData(LanguageSkill, 300, recommendations[2])}>
                    <i class="fa fa-language fa-2x" aria-hidden="true"></i>
                </button>
            </div>
            <Barplot className="worlk-barplot"
                width={width}
                height={height - BUTTONS_HEIGHT}
                data={data}
            />
        </div>
    );
}

const WorkPage = () => {
    const [selectedData, setSelectedData] = useState(ComSkill);
    const [height, setHeight] = useState(500);
    const [testimonyMessage, setTestimonyMessage] = useState(recommendations[0]["message"]);
    const [testimonyAuthor, setTestimonyAuthor] = useState(recommendations[0]["author"]);
    const windowWidth = useRef(window.innerWidth).current
    const barplotWidth = parseInt(windowWidth*0.95)

    const changeData = (data, height, testimony) =>{
        setSelectedData(data);
        setHeight(height);
        setTestimonyMessage(testimony["message"]);
        setTestimonyAuthor(testimony["author"]);
    }
    return(
        <SplitScreen leftWeight={2} rightWeight={3} className={'margined-page wrapped-page work-center-container'}>
            <div className="work-left-container">
                <div className="work-photo-container">
                    <LazyLoadImage src={Image1} className="work-photo"
                        width={IMAGE_WIDTH} height={IMAGE_HEIGHT}
                        alt="Profile picture"
                    />
                </div>
                
                <div className="work-citation">
                    <div className="work-testimony-message">
                        <div className='work-quote-decor'>
                            <i class="fa fa-quote-left quote-icons" id="quote-left" aria-hidden="true"></i>
                            <HorLineBar id="work-horLine"/>
                        </div>
                        <div className="work-testimony">
                            {testimonyMessage}
                        </div>
                        <div className="work-testimony-author">
                            -  {testimonyAuthor} 
                        </div>
                        <div className='work-quote-decor'>
                            <HorLineBar id="work-horLine"/>
                            <i class="fa fa-quote-right quote-icons" id="quote-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
            <RightColumn width={windowWidth>=800?700:barplotWidth} className='work-right-container' changeData={changeData} data={selectedData} height={height} />
        </SplitScreen>
    );
}

export default WorkPage;