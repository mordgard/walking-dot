import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import { TopBar } from "../TopBar";
import { SideBar } from "../SideBar";

function App() {
  return (
    <>
      <CssBaseline />
      <TopBar />
      <SideBar />
    </>
  );
}

export default App;
