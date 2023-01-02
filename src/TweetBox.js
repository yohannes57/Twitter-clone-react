import { Avatar, Button } from "@mui/material";
import "./TweetBox.css";
import React, { useState, useEffect } from "react";
import avater_me from "./img/avater_me.jpg";
import db from "./firebase";
function TweetBox() {
  const [tweetmsg, setTweetMsg] = useState("");
  const [tweetimage, setTweetImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "yohannes deres",
      username: "yam7",
      verified: true,
      text: tweetmsg,
      image: tweetimage,
      avatar:
        "https://pbs.twimg.com/profile_images/1591683341027532800/ts7hyWZt_400x400.jpg",
    });
    setTweetImage("");
    setTweetMsg("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src={avater_me} />
          <input
            className="tweetBox_input"
            onChange={(e) => setTweetMsg(e.target.value)}
            value={tweetmsg}
            placeholder="what's happing!"
          />
        </div>
        <input
          value={tweetimage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox_image"
          placeholder="Url for image"
        />
        <Button type="submit" onClick={handleSubmit} className="TweetBox_tweet">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
