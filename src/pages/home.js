import { SplitScreen, HorizSplitScreen } from "../components/SpliScreen";
import { LineBar, HorLineBar } from "../components/shapes";
const NameTag = () => {
    return(
        <div className='name-tag'>
            <LineBar id='author-bar'></LineBar>
            <div id='author-name'>Mariamawit<br/>S. Ashenafi</div>
        </div>
    )
}
    
    
const TitleTag = () => {
    return (
        <div className="title-tag">
            <div className="career-path">Full Stack Developer</div>
            <div className="doc-title">Portfolio</div>
        </div>
    )
}

const LeftHandComponent = () => {
    return (
        <HorizSplitScreen topWeight={3} bottomWeight={4} className={"home-left-screen"}>
            <NameTag/>
            <TitleTag />
        </HorizSplitScreen>
    )
  }

const RightHandComponent = () => {
    return (
        <div className="home-right-screen">
            <div className="home-photo-container">
                <div className="photo-home" id="photo_1"></div>
            </div>
            <HorLineBar id='horizontal-line-home' />

        </div>

    )
  }



const HomePage = () => {
    return (
        <SplitScreen leftWeight={5} rightWeight={6} className='framed-page'>
            <LeftHandComponent />
            <RightHandComponent />
        </SplitScreen>
    );
}

export default HomePage;