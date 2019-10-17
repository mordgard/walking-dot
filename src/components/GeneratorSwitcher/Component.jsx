import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

const Component = ({ isChecked, handleChange }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Generator Switcher</FormLabel>
    <FormGroup>
      <FormControlLabel
        control={
          <Switch checked={isChecked} onChange={handleChange} color="default" />
        }
        label={`${isChecked ? "RNG" : "PRNG"} Enabled`}
      />
    </FormGroup>
    <FormHelperText>Pseudo / Random Number Generator</FormHelperText>
  </FormControl>
);

export default Component;
