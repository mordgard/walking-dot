import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TopBar } from "../TopBar";
import { SideBar } from "../SideBar";
import { Canvas } from "../Canvas";

function App() {
  return (
    <>
      <CssBaseline />
      <TopBar />
      <SideBar />
      <Canvas />
    </>
  );
}

export default App;
