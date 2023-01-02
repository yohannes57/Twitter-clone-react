import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import myimage from "./img/avater_me.jpg";
import db from "./firebase";
import FlipMove from "react-flip-move";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="feed">
      {/* header */}
      <div className="feed_header">
        <h1>Home</h1>
      </div>
      <TweetBox />
      <FlipMove>
        {posts?.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>

      <Post
        displayName="BBC News (worl)"
        username="BBCWorld"
        verified={true}
        text="Chinese fighter jet flies 20 feet from US military plane"
        avatar="https://th.bing.com/th/id/OIP.q6vhAaxqJNQzghy2asht9QHaFj?pid=ImgDet&rs=1"
        image="https://pbs.twimg.com/card_img/1608878347899265024/y1t5gsQW?format=jpg&name=small"
      />
      <Post
        displayName="fiker molla"
        username="feker"
        verified={true}
        text="life is the gift we have ever recieved!"
        avatar="https://twitter.com/ytmderes"
        image="https://pbs.twimg.com/media/FlRF4aOXwAU7JgC?format=jpg&name=360x360"
      />
      <Post
        displayName="Getachew molla"
        username="gech"
        verified={true}
        text="try youur best and let God do  the other !"
        avatar="https://twitter.com/ytmderes"
        image="https://pbs.twimg.com/media/FlRF4aOXwAU7JgC?format=jpg&name=360x360"
      />
    </div>
  );
}

export default Feed;
