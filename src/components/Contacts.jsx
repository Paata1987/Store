import React from 'react';
import { Outlet } from 'react-router-dom';

const Contacts = () => {
  return (
    <div className="mainComponentsClass">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
<<<<<<< HEAD
              name="contact-form"
              action="mail.php"
=======
>>>>>>> b4241fac8eff8fcb442933ef18169e8b5b86cc37
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
<<<<<<< HEAD
                    <label for="name" className="">
=======
                    <label
                      for="name"
                      className=""
                    >
>>>>>>> b4241fac8eff8fcb442933ef18169e8b5b86cc37
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
<<<<<<< HEAD
                    <label for="email" className="">
=======
                    <label
                      for="email"
                      className=""
                    >
>>>>>>> b4241fac8eff8fcb442933ef18169e8b5b86cc37
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
<<<<<<< HEAD
                    <label for="subject" className="">
=======
                    <label
                      for="subject"
                      className=""
                    >
>>>>>>> b4241fac8eff8fcb442933ef18169e8b5b86cc37
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
<<<<<<< HEAD
              <a
                className="btn btn-primary"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
=======
              <div className="btn btn-primary">Send</div>
>>>>>>> b4241fac8eff8fcb442933ef18169e8b5b86cc37
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Outlet />
    </div>
  );
};

export default Contacts;
