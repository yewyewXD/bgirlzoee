import React from "react";

const PageLayout = ({ children }) => {
  const socialMedias = [
    {
      link: "https://www.instagram.com/bgirlzoee/",
      text: "INSTAGRAM",
    },
    {
      link: "https://twitter.com/bgirlzoee",
      text: "TWITTER",
    },
    {
      link: "https://www.facebook.com/zoee.hablot.7/",
      text: "FACEBOOK",
    },
  ];
  return (
    <>
      <header className="Header | w-100">
        <nav className="navbar navbar-expand-sm bg-transparent navbar-dark">
          <div className="container">
            {/* Logo */}
            <a
              className="HeaderBrand | navbar-brand text-white"
              href="https://www.instagram.com/bgirlzoee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              bgirlzoee<span className="highlight">.</span>
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu */}
            <div className="collapse navbar-collapse " id="collapsibleNavId">
              <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                <li className="nav-item text-white active">
                  <a className="nav-link mx-2" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#posts">
                    Posts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#gallery">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#interests">
                    Interests
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {children}

      <footer className="Footer | py-5">
        <div className="container text-center">
          {/* footer title */}
          <div className="mb-4">
            <a
              href="https://www.instagram.com/bgirlzoee/"
              target="_blank"
              rel="noopener noreferrer"
              className="FooterBrand | text-white"
            >
              bgirlzoee<span className="highlight">.</span>
            </a>
          </div>

          <div className="row all-center">
            <div className="col-md-7">
              <div className="d-flex flex-wrap all-center">
                {socialMedias.map((socialMedia) => (
                  <a
                    className="mx-3 mb-1 muted"
                    key={socialMedia.link}
                    href={socialMedia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialMedia.text}
                  </a>
                ))}
              </div>

              <div className="mt-5 muted">
                bgirlzoee © 2021 All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PageLayout;
