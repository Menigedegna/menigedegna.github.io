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
        fill='var(--bgcolor)'
        stroke='black'
        strokeWidth={1}
        rx={5}
      />

      <animated.rect
        x={x}
        y={springProps.y}
        width={springProps.barWidth}
        height={barHeight}
        opacity={0.7}
        stroke='var(--color-red)'
        fill='var(--color-red)'
        fillOpacity={0.3}
        strokeWidth={1}
        rx={1}
      />
      <animated.rect
        x={x}
        y={springProps.y}
        width={quarterX}
        height={barHeight}
        opacity={0.9}
        fill='black'
        stroke='black'
        strokeWidth={1}
        fillOpacity={0.9}
        rx={5}
      />
      <animated.text 
        x={x + 10}
        y={springProps.y?.to((y) => y + barHeight / 2)}
        textAnchor="start"
        alignmentBaseline="central"
        fontFamily='var(--normal-text-font)'
        fontSize='1.1rem'
        fill='var(--color-white)'
        stroke='var(--color-white)'
        strokeWidth={1}

      >
        {name}
      </animated.text>
    </g>
  );
};
