// import { styled } from "styled-components";
import { SplitScreen, BorderFrame } from "../components/SpliScreen";
import { AboutMePageContent } from "../components/contents";
import { HorLineBar, Circle } from "../components/shapes";

const SkillTag = ({name}) => {
    return(
        <div className='skill-container'>
            <Circle/>
            <div className="skill-tag">{name}</div>
        </div>
    );
}

const LeftHandComponent = () => {
    return (
        <div className="aboutMe-left-screen">
            <div className='aboutMe-title'>
                <div className="aboutMe-title-container">
                    <div className="aboutMe-title">About Me</div>
                    <HorLineBar />
                </div>
                <div className="aboutMe-author">Mariamawit Ashenafi</div>
            </div>
            <div className="normal_text" id="aboutme-text">{AboutMePageContent}</div>
            <div className="skills_icons">
                <SkillTag name={"Python"}/>
                <SkillTag name={"JavaScript"}/>
                <SkillTag name={"HTML5/CSS"}/>
            </div>
        </div>
    )
}
const RightHandComponent = () => {
return (
        <div className="photo_2"></div>
    )
}

const MainContent = () => {
    return(
        <SplitScreen leftWeight={5} rightWeight={5} className={'center-container'}>
            <LeftHandComponent />
            <RightHandComponent />
        </SplitScreen>
    );
}
const AboutMePage = () => {
    return (
        <BorderFrame displacement={'100%'} className={'aboutMe-page'}>
            <MainContent />
        </BorderFrame>

    );
}

export default AboutMePage;