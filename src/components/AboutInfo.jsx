import React from 'react';
import { Outlet } from 'react-router-dom';

const AboutInfo = () => {
  return (
    <div className="mainComponentsClass">
<<<<<<< HEAD
      AboutInfo
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <h2>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="/w3images/team1.jpg" alt="Jane" />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team2.jpg" alt="Mike" />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team3.jpg" alt="John" />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
=======
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <div className="navbar-brand d-flex align-items-center">
            {' '}
            <i className="fa fa-snowflake-o fa-lg text-primary mr-2"></i>
            <strong>Snowflake</strong>
          </div>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            id="navbarSupportedContent"
            className="collapse navbar-collapse"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <div className="nav-div font-italic"> Home </div>
              </li>
              <li className="nav-item active">
                <div className="nav-div font-italic"> About </div>
              </li>
              <li className="nav-item active">
                <div className="nav-div font-italic"> Services </div>
              </li>
              <li className="nav-item active">
                <div className="nav-div font-italic"> Contact</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About us page</h1>
              <p className="lead text-muted mb-0">
                Create div minimal about us page using Bootstrap 4.
              </p>
              <p className="lead text-muted">
                Snippet by{' '}
                <div
                  href="https://bootstrapious.com/snippets"
                  className="text-muted"
                >
                  <u>Bootstrapious</u>
                </div>
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
              <p className="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </div>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
              <p className="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Manuella Nevoresky</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-facebook-f"></i>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-twitter"></i>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-linkedin"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Samuel Hardy</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-facebook-f"></i>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-twitter"></i>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-linkedin"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Tom Sunderland</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-facebook-f"></i>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-twitter"></i>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-linkedin"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">John Tarly</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-facebook-f"></i>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-twitter"></i>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="social-div">
                      <i className="fa fa-linkedin"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-light pb-5">
        <div className="container text-center">
          <p className="font-italic text-muted mb-0">
            &copy; Copyrights Company.com All rights reserved.
          </p>
        </div>
      </footer>
>>>>>>> b4241fac8eff8fcb442933ef18169e8b5b86cc37
      <Outlet />
    </div>
  );
};

export default AboutInfo;
