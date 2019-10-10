import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

const Component = () => {
  const [state, setState] = React.useState({
    gilad: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">PRND / RND</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.gilad}
              onChange={handleChange("gilad")}
              color="default"
              value="gilad"
            />
          }
          label={`${0} enabled`}
        />
      </FormGroup>
      <FormHelperText>Random number generator switch</FormHelperText>
    </FormControl>
  );
};

export default Component;
