import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    height: 100%;
`;

const Pane = styled.div`
    // to determine flex size with leftWeight and rightWeight
    flex: ${props => props.weight};
    width: 100%;
    height: 100%;
`;

const ContainerHor = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
`;

export const SplitScreen = ({
    children,
    leftWeight =1,
    rightWeight = 1,
    className='vert-screen'
}) => {
    console.log("vertical screen");
    console.log(children);
    const [left, right] = children;
    return (
        <Container className={className}>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    )
};

export const HorizSplitScreen = ({
    children,
    topWeight =1,
    bottomWeight = 1,
    className="hor-screen"
}) => {
    const [top, bottom] = children;
    return (
        <ContainerHor className={className}>
            <Pane weight={topWeight}>
                {top}
            </Pane>
            <Pane weight={bottomWeight}>
                {bottom}
            </Pane>
        </ContainerHor>
    )
};

const Well = styled.div`
    background-color: var(--bgcolor);
    width: 100%;
    aspect-ratio: 1/1;
    transform: translateY(${props => props.displacement});
`;

export const BorderFrame = ({
    children,
    displacement = 0,
    className="border-frame"
}) => {
    console.log("child");
    console.log(children);
    return (
        <Container className={className}>
            <Pane weight={0.5} style={{backgroundColor: 'var(--color-red)', marginRight: '50px'}}>
                <Well displacement={displacement}/>
            </Pane>
            <Pane weight={10}>
                {children}
            </Pane>
        </Container>
    )
};