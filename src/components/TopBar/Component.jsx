import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { ButtonGroup } from "../ButtonGroup";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  counter: {
    marginRight: theme.spacing(2)
  }
}));

const Component = ({ handleOpenSidebar }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpenSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Walking Dot
          </Typography>
          <Box flexGrow={1}></Box>
          <Typography className={classes.counter}>Steps: {0}</Typography>
          <ButtonGroup />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Component;
