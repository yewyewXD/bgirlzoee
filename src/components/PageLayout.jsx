import React from "react";

const PageLayout = ({ children }) => {
  return (
    <>
      <header className="Header | position-absolute">
        <nav className="navbar navbar-expand-sm bg-transparent">
          <div className="container">
            <a className="HeaderBrand | navbar-brand text-white" href="/">
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
            </button>
            <div className="collapse navbar-collapse " id="collapsibleNavId">
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

      <footer>footer</footer>
    </>
  );
};

export default PageLayout;
