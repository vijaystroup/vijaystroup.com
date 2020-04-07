import React from 'react';

const About = () => {
  return (
    <div style={aboutContainer}>
      <div className="container">
        <h1 id="about" style={section_title} className="has-text-centered">About</h1>

        <div className="columns">
          <div style={aboutText} className="column">
            <h1>Hi, I'm Vijay, and I am currently studying physics and computer science at The University of Central Florida.</h1>
            <h3>
              I love programming in variety of topics, however creating applications is my favorite.
              <br />As of April 2020, I have ~2.0 years of programming experience.
            </h3>
            <br />
            <p>Click <a href="https://www.vijaystroup.com/static/resume.pdf" target="_blank">HERE</a> to view my Resume.</p>
          </div> {/* end coloumn left */}
          <div className="column">
            <h1 style={programmingTitle} className="has-text-centered">Programming Languages</h1>
            <br />
            <p>Python</p><progress className="progress is-danger" value="100" max="100">100%</progress>
            <p>C</p><progress className="progress is-danger" value="80" max="100">80%</progress>
            <p>Javascript (Vanilla, NodeJS, ReactJS)</p><progress className="progress is-danger" value="80" max="100">80%</progress>
            <p>HTML & CSS</p> <progress className="progress is-danger" value="90" max="100">90%</progress>
            <p className="has-text-right">* Skill levels are relative to Python.</p>
            <br /><br /><br />
            <h1 style={programmingTitle} className="has-text-centered">Programming Tools</h1>
            <br />
            <ul>
              <li>- Various 'cloud' servers (e.g. Digital Ocean, Vultur, OVH, private servers)</li>
              <li>- Git Version Control (including many web-based git control system such as GitHub)</li>
              <li>- Unix command line</li>
              <li>- Visual Studio Code</li>
            </ul>
          </div> {/* end coloumn right */}
        </div> {/* end coloumns */}
      </div>
    </div>
  )
}

const section_title = {
  fontSize: '30px',
  fontFamily: 'FredokaOne',
  paddingTop: '5%',
  paddingBottom: '3%'
}

const programmingTitle = {
  fontSize: '20px',
  fontWeight: 'bold',
  textDecoration: 'underline'
}

const aboutText = {
  paddingTop: '5%',
  fontSize: '20px',
  fontWeight: '800'
}

const aboutContainer = {
  backgroundColor: '#f2f4fb'
}

export default About;
