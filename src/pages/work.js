// TODO: CHANGE COLOR OF BARPLOT

import { SplitScreen, BorderFrame } from "../components/SpliScreen";
import { useState } from "react";
import { PersDev, ComSkill, LanguageSkill, recommendations } from "../components/contents";
import { Barplot } from "../components/Barplot";

const BUTTONS_HEIGHT = 50;


const RightColumn = ({width, className, changeData, data, height}) =>{
    return(
        <div className={className}>
            <div className="work-skills_icons">
                <button className="work-button" onClick={() => changeData(ComSkill, 500, recommendations[0])}>{"Computer Programing"}</button>
                <button className="work-button" onClick={() => changeData(PersDev, 600, recommendations[1])}>{"Personal Development"}</button>
                <button className="work-button" onClick={() => changeData(LanguageSkill, 300, recommendations[2])}>{"Language"}</button>
            </div>
            <Barplot className="worlk-barplot"
                width={width}
                height={height - BUTTONS_HEIGHT}
                data={data}
            />
        </div>
    );
}

const MainContent = () => {
    const [selectedData, setSelectedData] = useState(ComSkill);
    const [height, setHeight] = useState(500);
    const [testimonyMessage, setTestimonyMessage] = useState(recommendations[0]["message"]);
    const [testimonyAuthor, setTestimonyAuthor] = useState(recommendations[0]["author"]);

    const changeData = (data, height, testimony) =>{
        setSelectedData(data);
        setHeight(height);
        setTestimonyMessage(testimony["message"]);
        setTestimonyAuthor(testimony["author"]);
    }
    return(
        <SplitScreen leftWeight={1} rightWeight={2} className={'work-center-container'}>
            <div className="work-left-container">
                <div className="work-photo"></div>
                <div className="work-citation">
                    <div className="work-testimony-message">
                        <i class="fa fa-quote-left quote-icons" id="quote-left" aria-hidden="true"></i>
                        {testimonyMessage}
                        <i class="fa fa-quote-right quote-icons" id="quote-right" aria-hidden="true"></i>
                    </div>
                    <div className="work-testimony-author">
                        -  {testimonyAuthor} 
                    </div>
                </div>
            </div>
            <RightColumn width={800} className='work-right-container' changeData={changeData} data={selectedData} height={height}/>
        </SplitScreen>
    );
}
const WorkPage = () => {
    return (
        <BorderFrame displacement={'340%'}>
            <MainContent />
        </BorderFrame>
    );
}

export default WorkPage;