import React, { useState, useEffect } from "react";
import axios from "axios";

const PostsSection = () => {
  const [allPosts, setAllPosts] = useState([
    {
      caption:
        "One of my favourite freeze even if I struggle all the time to do it 😂↵↵📸 : @lolotte535 ↵↵#breakdance #bgirl #bgirling #breaking #bgirlizm #bboy #bboying #airfreeze #freeze #tricks #autumn #falls #dancer #swissgirl #frenchgirl #brownhairgirl",
      id: "18058285615252140",
      media_url:
        "https://scontent.cdninstagram.com/v/t51.29350-15/124096396_640880033260405_1023712826352361679_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8ae9d6&_nc_ohc=XBCpWvMCso8AX_DzoWl&_nc_ht=scontent.cdninstagram.com&oh=4cb1876d3ad714936c6843c414968a7c&oe=601727A8",
      timestamp: "2020-11-10T16:41:35+0000",
    },
  ]);

  function handleFormatDate(date) {
    const longDate = new Date(date);
    const formattedDate =
      longDate.getDate() +
      "." +
      (+longDate.getMonth() + 1) +
      "." +
      longDate.getFullYear();
    return formattedDate;
  }

  async function handleGetPosts() {
    try {
      const res = await axios.get(
        `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,permalink,thumbnail_url&access_token=${process.env.REACT_APP_IG_TOKEN}`
      );
      console.log(res.data);
      const latestPosts = res.data.data.slice(0, 3);

      setAllPosts(latestPosts);
    } catch (err) {
      setAllPosts([]);
      console.log("GET post error:", err);
    }
  }

  useEffect(() => {
    handleGetPosts();
  }, []);

  return (
    <div className="PostsSection | py-5 my-5">
      <div className="container">
        <h2 className="text-center mb-5">My Latest Posts</h2>
        <div className="row">
          {allPosts.length > 0 &&
            allPosts.map((post) => (
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                key={post.id}
                className="CardContainer | col-lg-4 mb-lg-0 mb-5 text-decoration-none"
              >
                <div className="card text-white bg-transparent">
                  <div
                    className="CardImage | card-img-top"
                    style={{
                      backgroundImage: `url(${
                        post.thumbnail_url ? post.thumbnail_url : post.media_url
                      })`,
                    }}
                    alt={post.caption}
                  ></div>
                  <div className="card-body p-0 mt-4">
                    <small className="card-title muted">
                      Posted on {handleFormatDate(post.timestamp)}
                    </small>
                    <p className="card-text">
                      {post.caption.substring(0, post.caption.indexOf("#"))}
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
