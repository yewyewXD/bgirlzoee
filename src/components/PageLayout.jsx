import React from "react";

const PageLayout = ({ children }) => {
  return (
    <>
      <header className="Header | w-100 position-absolute">
        <nav className="navbar navbar-expand-sm bg-transparent">
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
            {/* <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}

            {/* Menu */}
            {/* <div className="collapse navbar-collapse " id="collapsibleNavId">
              <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                <li className="nav-item text-white active">
                  <a className="nav-link text-white" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">
                    Link
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </nav>
      </header>

      {children}

      <footer className="Footer | bg-dark">
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
                <span className="mx-3">INSTAGRAM</span>
                <span className="mx-3">FACEBOOK</span>
                <span className="mx-3">TWITTER</span>
              </div>

              <div className="mt-5">bgirlzoee © 2021 All rights reserved</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PageLayout;
