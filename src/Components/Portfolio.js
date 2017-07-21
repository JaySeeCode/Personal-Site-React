import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var portfolio = this.props.data.projects.map((project) => {
          var imageURL = "/images/portfolio/"+project.image;
          return (
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href={project.modal} title="">
                  <img alt="image not rendering" src={imageURL}/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{project.title}</h5>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  {/* <div className="link-icon"><i className="icon-plus"></i></div> */}
                </a>
              </div>
            </div>
          );
      });
    }//end if
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {portfolio}
            </div>  {/* portfolio-wrapper end */}

          </div> {/* twelve columns end */}
        </div> {/* row End */}

      </section>
    );
  }
}

export default Portfolio;
