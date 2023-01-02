import React from "react";
import "./SidebarOption.css";
function SidebarOption({ active, Icon, iconName }) {
  return (
    <div className={`sideOption ${active && "sideOption_active"}`}>
      <Icon />
      <h2>{iconName}</h2>
    </div>
  );
}

export default SidebarOption;
