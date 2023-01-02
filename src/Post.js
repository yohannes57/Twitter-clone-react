import React, { forwardRef, useState } from "react";
import { Avatar } from "@mui/material";
import avater_me from "./img/avater_me.jpg";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./Post.css";
const Post = forwardRef(
  ({ displayName, username, avatar, verified, text, image }, ref) => {
    const [likes, setLikes] = useState(Number);
    const handlClick = () => {
      setLikes(likes + 1);
    };
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && (
                    <CheckCircleOutlineIcon className="post_verified_right" />
                  )}
                  @{username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} width="500px" alt="" />
          <div className="post__footer">
            <span>
              <ChatBubbleOutlineIcon fontSize="small" />
            </span>
            <ChatBubbleIcon fontSize="small" />
            <span>
              <FavoriteBorderIcon onClick={handlClick} fontSize="small" />
              <label className="post_likes">{likes}</label>
            </span>
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
