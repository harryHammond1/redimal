import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Article.css";

const Article = () => {
  // Declare a state variable to store the data from the Reddit API
  const [posts, setPosts] = useState([]);

  // Use the useEffect hook to fetch the data from the Reddit API
  useEffect(() => {
    axios
      .get("https://www.reddit.com/hot.json")
      .then((response) => {
        setPosts(response.data.data.children);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // The empty array as the second argument tells React to only execute the effect once

  // Iterate over the list of posts and render a component for each post
  const postElements = posts.map((post) => {
    return (
      <div className="article" key={post.data.id}>
        <h2 className="postTitle">{post.data.title}</h2>
        <img className="thumbnail" src={post.data.thumbnail} />
        <p className="postAuthor">{post.data.author}</p>
        <p className="innerContainer">{post.data.num_comments} comments</p>
        <p className="innerContainer">{post.data.score} likes</p>
        sdfsdf
      </div>
    );
  });

  return <div>{postElements}</div>;
};

export default Article;
