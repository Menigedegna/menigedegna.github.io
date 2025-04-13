// TODO : ADD A OPENPDF FUNCTION TO OPEN RESUME IN A NEW TAB
// TODO: ALLOW VIEWER TO DOWNLOAD RESUME

import { SplitScreen, BorderFrame } from "../components/SpliScreen";
import { ExperiencePython, ExperienceJavascript, ExperienceHTML } from "../components/contents";


const ExpContent = ({skill, content, id}) => {
    return(
        <div className="experience-content">
            <div className="experience-title" id={id}>{skill}</div>
            <div className="experience-description">{content}</div>

        </div>
    );
}

const ColumnsOneTwo = () =>{
    return(
        <SplitScreen leftWeight={1} rightWeight={1} className={'experience-columns-one-two'}>
            <div className="experience-column" id="column1">
                <ExpContent skill="Python" content={ExperiencePython} id="python" />
                <ExpContent skill="HTML5/CSS" content={ExperienceHTML} id="html" />
            </div>
            <div className="experience-column" id="photo-container">
                <div className="photo-home" id="photo_3"></div>
            </div>
        </SplitScreen>
    ); 
}

const OpenPDF = () => {
    return;
}

const MainContent = () => {
    return(
        <SplitScreen leftWeight={2} rightWeight={1} className={'experience-center-container'}>
            <ColumnsOneTwo />
            <div className="experience-column" id="column3">
                <ExpContent skill="JavaScript" content={ExperienceJavascript} id="js"/>
                <button className="submit-button" onClick={OpenPDF}>Resume</button>
            </div>
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