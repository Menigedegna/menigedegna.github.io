import { useState } from "react";
import { PersDev, ComSkill } from "../components/contents";
import { Barplot } from "./Barplot";

const BUTTONS_HEIGHT = 50;

const buttonStyle = {
  border: "1px solid #9a6fb0",
  borderRadius: "3px",
  padding: "4px 8px",
  margin: "10px 2px",
  fontSize: 14,
  color: "#9a6fb0",
  opacity: 0.7,
};

export const BarplotDatasetTransition = ({
  width,
  height,
}) => {
  const [selectedData, setSelectedData] = useState(PersDev);

  return (
    <div>
      <div style={{ height: BUTTONS_HEIGHT }}>
        <button style={buttonStyle} onClick={() => setSelectedData(PersDev)}>
          Data 1
        </button>
        <button style={buttonStyle} onClick={() => setSelectedData(ComSkill)}>
          Data 2
        </button>
      </div>

      <Barplot
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={selectedData}
      />
    </div>
  );
};
