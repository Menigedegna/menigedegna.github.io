// TODO: REPLACE BARPLOTDATASETTRANSITION BUTTONS WITH CIRCLE BUTTONS 
// TODO: INCREASE SIZE OF BARPLOT
// TODO: CHANGE COLOR OF BARPLOT
// TODO: ADD THIRD DATA

import { SplitScreen, BorderFrame } from "../components/SpliScreen";
import { Circle } from "../components/shapes";
import { BarplotDatasetTransition } from "../components/BarplotDatasetTransition";

const RightColumn = () =>{
    return(
        <BarplotDatasetTransition width={800} height={300} />
    );
}

const SkillTag = ({name}) => {
    return(
        <div className='skill-container'>
            <Circle/>
            <div className="skill-tag">{name}</div>
        </div>
    );
}

const LeftColumn = () => {
    return(
        <div className="work-skills_icons">
            <SkillTag name={"Computer Skills"}/>
            <SkillTag name={"Social Skills"}/>
            <SkillTag name={"Personal Development Skills"}/>
        </div>
    );
}
const MainContent = () => {
    return(
        <SplitScreen leftWeight={1} rightWeight={3} className={'work-center-container'}>
            <LeftColumn/>
            <RightColumn />
        </SplitScreen>
    );
}
const WorkPage = () => {
    return (
        <BorderFrame displacement={'535%'} className={'framed-page'}>
            <MainContent />
        </BorderFrame>
    );
}

export default WorkPage;