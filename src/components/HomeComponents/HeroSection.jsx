import React from "react";

const HeroSection = () => {
  return (
    <section className="HeroSection">
      {/* caption */}
      <div className="Caption | h-100 w-100 all-center position-absolute">
        <div className="container">
          <div className="Caption__Title | heading mb-md-3 mb-2">
            Zoée Hablot
          </div>
          <div className="Caption__Subtitle">
            Breakdancer, photographer, artist, designer
          </div>
          <a
            className="actionButton | mt-4 btn btn-outline-primary btn-lg"
            href="https://www.instagram.com/bgirlzoee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the community
          </a>
        </div>
      </div>

      {/* video */}
      <div className="VideoContainer | all-center h-100 position-absolute overflow-hidden">
        {/* blurred video */}
        <video
          className="BlurredVideo | d-none h-100 position-absolute"
          loop
          playsInline
          autoPlay
          muted
          preload="auto"
          poster="https://instagram.fkul14-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/88131322_242863696739852_8645542826988865499_n.jpg?_nc_ht=instagram.fkul14-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=oxcWcFDutwkAX_zyVZR&tp=1&oh=acf436f5d136df7708b79439a064b338&oe=5FF3472B"
          src="media/compressed-trim.mp4"
          type="video/mp4"
        ></video>
        <div className="BlurredBackdrop | d-none h-100 w-100 position-absolute"></div>

        {/* real video */}
        <video
          className="Video"
          loop
          playsInline
          autoPlay
          muted
          preload="auto"
          poster="https://instagram.fkul14-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/88131322_242863696739852_8645542826988865499_n.jpg?_nc_ht=instagram.fkul14-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=oxcWcFDutwkAX_zyVZR&tp=1&oh=acf436f5d136df7708b79439a064b338&oe=5FF3472B"
          src="media/trimmed-origin.mp4"
          type="video/mp4"
        ></video>
      </div>

      <div className="VideoContainer__Shadow | position-absolute h-100 w-100"></div>
    </section>
  );
};

export default HeroSection;
