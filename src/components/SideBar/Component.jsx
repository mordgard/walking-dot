import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";

const Component = ({ isSidebarOpen, handleCloseSidebar }) => {
  return (
    <Box>
      <Drawer open={isSidebarOpen} onClose={handleCloseSidebar}>
        <Box>Lorem ipsum dolor sit amet</Box>
      </Drawer>
    </Box>
  );
};

export default Component;
