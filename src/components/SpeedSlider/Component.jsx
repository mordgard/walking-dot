import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const marks = [
  {
    value: 1,
    label: "1/s"
  },
  {
    value: 500,
    label: "500/s"
  },
  {
    value: 1000,
    label: "Full"
  }
];

const Component = ({ onChangeSpeed, speed }) => {
  return (
    <>
      <Typography id="discrete-slider" gutterBottom>
        Steps per second
      </Typography>
      <Slider
        defaultValue={speed}
        getAriaValueText={onChangeSpeed}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks={marks}
        min={1}
        max={1000}
      />
    </>
  );
};

export default Component;
