import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";

const PageLayout = ({ children }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [navBg, setNavBg] = useState("");

  useEffect(() => {
    const listener = document.addEventListener("scroll", () => {
      const navBgClass = window.scrollY < 400 ? "" : "darkBg";
      setNavBg(navBgClass);
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [navBg]);

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

  const navItems = [
    {
      link: "#home",
      text: "Home",
    },
    {
      link: "#posts",
      text: "Posts",
    },
    {
      link: "#gallery",
      text: "Gallery",
    },
    {
      link: "#interests",
      text: "Interests",
    },
  ];
  return (
    <>
      <header className={`Header | w-100 ${navBg}`}>
        <nav className="navbar navbar-expand-md bg-transparent navbar-dark py-1">
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
              className={`navbar-toggler d-md-none btn btn-outline-secondary bg-transparent ${
                navIsOpen && "themeOutline"
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                setNavIsOpen((prevIsOpen) => !prevIsOpen);
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu */}
            <div
              className={`collapse navbar-collapse ${navIsOpen && "show"}`}
              id="collapsibleNavId"
            >
              <Scrollspy
                className="navbar-nav mt-2 mt-lg-0 ml-auto"
                offset={-30}
                items={["home", "posts", "gallery", "interests"]}
                currentClassName="active"
              >
                {navItems.map((navItem) => (
                  <li className="nav-item" key={navItem.link}>
                    <a className="nav-link mx-2" href={navItem.link}>
                      {navItem.text}
                    </a>
                  </li>
                ))}
              </Scrollspy>
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
