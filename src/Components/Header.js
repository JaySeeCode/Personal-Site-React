import React, { Component } from 'react';

class Header extends Component {
  render() {
    if(this.props.data){
      // console.log(this.props.data);
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      });
      var stack = this.props.data.stack.map(function(logo){
        var imageURL = '/images/stack/'+logo.image;
        if(logo.name === 'node.js'){
          return <li key={logo.name}><img style={logoStyles.nodeLogo} src={imageURL}/></li>
        }
        else if(logo.name === 'express'){
          return <li key={logo.name}><img style={logoStyles.expressLogo} src={imageURL}/></li>
        }
        else if(logo.name === 'mongodb'){
          return <li key={logo.name}><img style={logoStyles.mongoLogo} src={imageURL}/></li>
        }
        else if(logo.name === 'react'){
          return <li key={logo.name}><img style={logoStyles.reactLogo} src={imageURL}/></li>
        }

      });
    }
    return (
      <header id="home">

        <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
   	      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#works">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}

        </nav> {/* end #nav-wrap */}

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline"> {name}</h1>
            <h3>{city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
              {networks} <br />
              <div style={logoStyles.stackImages}>
                {stack}
              </div>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </header>
    );
  }
}

const logoStyles = {
  nodeLogo: {
    width: 150,
    height: 60
  },
  expressLogo: {
    width: 150,
    height: 45
  },
  mongoLogo: {
    width: 160,
    height: 55
  },
  reactLogo: {
    width: 150,
    height: 60
  },
  stackImages: {
    marginTop: 30
  }
}

export default Header;
