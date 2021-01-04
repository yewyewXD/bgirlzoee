import React, { useEffect } from "react";
import axios from "axios";

const PostsSection = () => {
  async function handleGetPosts() {
    const res = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp&access_token=${process.env.REACT_APP_IG_TOKEN}`
    );

    console.log(res.data);
  }

  useEffect(() => {
    handleGetPosts();
  }, []);

  return <div>post section</div>;
};

export default PostsSection;
