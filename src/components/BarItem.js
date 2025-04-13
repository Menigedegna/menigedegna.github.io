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
        fill='hsla(44, 80%, 5%, 1)'
        stroke='hsla(44, 65%, 5%, 1)'
        strokeWidth={0}
        rx={10}
      />

      <animated.rect
        x={x}
        y={springProps.y}
        width={springProps.barWidth}
        height={barHeight}
        opacity={1}
        fill='hsla(284, 85%, 35%, 1)'
        stroke='hsla(284, 70%, 15%, 1)'
        fillOpacity={1}
        strokeWidth={0}
        rx={10}
      />
      <animated.rect
        x={x}
        y={springProps.y}
        width={quarterX}
        height={barHeight}
        opacity={1}
        stroke='hsla(44, 75%, 5%, 1)'
        fill='hsla(44, 100%, 55%, 1)'
        strokeWidth={0}
        fillOpacity={1}
        rx={5}
      />
      <animated.text 
        x={x + 10}
        y={springProps.y?.to((y) => y+2 + barHeight / 2)}
        textAnchor="start"
        alignmentBaseline="central"
        fontFamily='var(--button-font)'
        fontSize='var(--barItem-font-size)'
        fill='hsla(284, 100%, 5%, 1)'
        stroke='hsla(284, 100%, 2%, 1)'
        strokeWidth={0.5}
      >
        {name}
      </animated.text>
    </g>
  );
};
