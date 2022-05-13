import React from "react";
import Avatar from "@mui/material/Avatar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Supakorn Ieamgomol</h2>
        <h4>supakorn.i@proton.me</h4>
      </div>
      <div className="sidebar__stats"></div>
    </div>
  );
};

export default Sidebar;
