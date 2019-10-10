import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Component = () => {
  return (
    <ButtonGroup
      variant="contained"
      color="default"
      size="small"
      aria-label="large outlined default button group"
    >
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </ButtonGroup>
  );
};

export default Component;
