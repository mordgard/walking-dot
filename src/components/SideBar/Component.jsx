import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { GeneratorSwitcher } from "../GeneratorSwitcher";
import { SpeedSlider } from "../SpeedSlider";

const Component = ({ isSidebarOpen, handleCloseSidebar }) => {
  return (
    <Box>
      <Drawer open={isSidebarOpen} onClose={handleCloseSidebar}>
        <Box display="flex" p={2} width={260}>
          <GeneratorSwitcher />
        </Box>
        <Divider />
        <Box p={2.5}>
          <SpeedSlider />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Component;
