import React from "react";

const HeroSection = () => {
  return (
    <section className="HeroSection">
      <div className="Caption | h-100 w-100 all-center text-white position-absolute ">
        <div className="container all-center-column align-items-start">
          <div className="Caption__Title">Zoee Hablot</div>
          <div className="Caption__Subtitle">My name is bgirlzoee</div>
        </div>
      </div>

      <div className="VideoContainer | h-100">
        <div className="VideoContainer__Shadow"></div>
        <video
          className="Video"
          loop
          playsInline
          autoPlay
          muted
          preload="auto"
          poster="https://instagram.fkul14-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/88131322_242863696739852_8645542826988865499_n.jpg?_nc_ht=instagram.fkul14-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=oxcWcFDutwkAX_zyVZR&tp=1&oh=acf436f5d136df7708b79439a064b338&oe=5FF3472B"
          src="https://scontent-iad3-1.cdninstagram.com/v/t50.2886-16/87761858_235555977470480_8244806077495858175_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjk2MC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=oAvMwavAK2QAX_s81of&vs=17917935946377672_1444852449&_nc_vs=HBksFQAYJEdNSWpPd1VRb2x5bVBOWUFBUDlUSDlOeGIydHlia1lMQUFBRhUAAsgBABUAGCRHSVhYVFFXUVBtMUJQdXdCQUszckJEdGozRVlrYmtZTEFBQUYVAgLIAQAoABgAGwAVAAAmkNX1xY6R1D8VAigCQzMsF0A7CHKwIMScGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&_nc_rid=be7d749e4f&oe=5FF3CCF1&oh=93c67ffb6c502756562172a027968904&dl=1"
          type="video/mp4"
        ></video>
      </div>
    </section>
  );
};

export default HeroSection;
