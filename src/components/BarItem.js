import { useSpring, animated } from "@react-spring/web";


export const BarItem = ( {name, value, barHeight, barWidth, x, y, maxX, quarterX}) => {

  const springProps = useSpring({
    // the 'from' properties will be used only to animate the initialization of the component
    // if you put nothing it will be initialized with the first prop that is provided
    from: {
      value: 0,
      barWidth: 0,
      valueOpacity: 0,
    },
    to: {
      value: value,
      barWidth: barWidth,
      valueOpacity: barWidth > 80 ? 1 : 0,
      y,
    },
    config: {
      friction: 100,
    },
  });

  return (
    <g>
      <animated.rect
        x={x}
        y={springProps.y}
        width={maxX}
        height={barHeight}
        opacity={0.8}
        fill='#09382a'
        stroke='black'
        strokeWidth={2}
        rx={5}
      />

      <animated.rect
        x={x}
        y={springProps.y}
        width={springProps.barWidth}
        height={barHeight}
        opacity={1}
        stroke='var(--color-bright-yellow)'
        fill='#FDA1AD'
        fillOpacity={0.9}
        strokeWidth={1}
        rx={2}
      />
      <animated.rect
        x={x}
        y={springProps.y}
        width={quarterX}
        height={barHeight}
        opacity={1}
        fill='#8B223F'
        stroke='#69293A'
        strokeWidth={3}
        fillOpacity={1}
        rx={1}
      />
      <animated.text 
        x={x + 10}
        y={springProps.y?.to((y) => y + barHeight / 2)}
        textAnchor="start"
        alignmentBaseline="central"
        fontFamily='var(--button-font)'
        fontSize='var(--barItem-font-size)'
        fill='#FDA1AD'
        stroke='#FDA1AD'
        strokeWidth={0.5}

      >
        {name}
      </animated.text>
    </g>
  );
};
