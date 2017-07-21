import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if(this.props.data){
      var education = this.props.data.education.map(function(edu){
        return (
          <div key={edu.school} className="row item">
            <div className="twelve columns">
              <h3>{edu.school}</h3>
              <p className="info">{edu.degree}<span>&bull;</span> <em className="date">{edu.graduation}</em></p>
              <p>
                {edu.description}
              </p>
            </div>
          </div>
        )
      });
      var work = this.props.data.work.map((exp) => {
        return (
          <div key={exp.company} className="row item">
            <div className="twelve columns">
              <h3>{exp.company}</h3>
              <p className="info">{exp.title}<span>&bull;</span> <em className="date">{exp.years}</em></p>
              <p>
                <ul>
                  {exp.description.map(ele => (<li>{ele}</li>) )}
                </ul>
              </p>
            </div>
          </div>
        )
      });

      var skills = this.props.data.skills.map((skill) => {
        //concatenating skill name from .json file
        var className = 'skills-bar-animation bar-expand '+skill.name.toLowerCase();
        return (
          //he're we're setting percentages dynamically inline rather than
          //statically from the stylesheet.
          <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
        )
      });
    }//end if

    return (
      <section id="resume">
        {/* Education */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {education}
          </div>
        </div> {/* End Education */}


        {/* Work / Experience */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>
          <div className="nine columns main-col">
            {work}
          </div>
        </div> {/*End Work*/}


        {/* Skills */}
        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
              I am capable of: working with Node.js to mount an Express server
              and building RESTful API's; storing and retrieving data from MongoDB;
              rendering a dynamic front-end using React.js. I can also work in the
              front-end designing and building static or dyanmic websites using HTML,
              CSS, JavaScript, jQuery and frameworks like Bootsrap, Materialize, or W3.CSS.
            </p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div> {/* End skills */}
      </section>
    );
  }
}

export default Resume;
