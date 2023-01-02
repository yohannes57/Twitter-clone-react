import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EmailIcon from "@mui/icons-material/Email";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import SidebarOption from "./SidebarOption";
import { Avatar } from "@mui/material";
import myimage from "./img/avater_me.jpg";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption className="icons" active Icon={HomeIcon} iconName="Home" />
      <SidebarOption className="icons" Icon={SearchIcon} iconName="Explore" />
      <SidebarOption
        className="icons"
        Icon={NotificationsIcon}
        iconName="Notifications"
      />
      <SidebarOption className="icons" Icon={EmailIcon} iconName="Messages" />
      <SidebarOption
        className="icons"
        Icon={BookmarkIcon}
        iconName="Bookmarks"
      />
      <SidebarOption className="icons" Icon={ListAltIcon} iconName="Lists" />
      <SidebarOption className="icons" Icon={PersonIcon} iconName="Profile" />
      <SidebarOption className="icons" Icon={MoreHorizIcon} iconName="More" />
      <button variant="outlined" className="sidebar__tweet" fullWidth>
        tweet
      </button>
      <div className="user_name">
        <span className="user-name">
          <Avatar className="avatater_profile" src={myimage} />
          <span className="avater_user_name-email">
            <h2>Yohanes molla</h2>
            <a href="/ytmderes">@ytmderes</a>
          </span>
        </span>
        {/* <Link to="/yousername"> */}
        <span className="login_logout">logout</span>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Sidebar;
