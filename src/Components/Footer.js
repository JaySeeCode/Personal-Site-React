import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

        <div className="row">

          <div className="twelve columns">

            <ul className="social-links">
              <li><a href="https://twitter.com/junior_webdev"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/in/juan-carlos-gonzalez-890145134/"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://github.com/JaySeeCode"><i className="fa fa-github"></i></a></li>
              <li><a href="http://skype.com"><i className="fa fa-skype"></i></a></li>
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2014 CeeVee</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
              <li>Powered by <a title="React" href="https://facebook.github.io/react/">React</a></li>
            </ul>

          </div>

          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

        </div>

      </footer>
    );
  }
}

export default Footer;
