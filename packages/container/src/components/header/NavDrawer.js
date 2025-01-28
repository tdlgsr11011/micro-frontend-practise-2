import React from "react";
import { Drawer } from "@material-ui/core";

const NavDrawer = (props) => {
  return (
    <Drawer anchor={"right"} open={props.showDrawer} onClose={props.onClose}>
      <div>Item1</div>
      <div>Item1</div>
      <div>Item1</div>
    </Drawer>
  );
};

export default NavDrawer;
