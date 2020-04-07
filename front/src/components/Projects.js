import React from 'react';

const Projects = () => {
  return (
    <div style={projectContainer}>
      <div className="container">
        <h1 id="projects" style={section_title} className="has-text-centered">Projects</h1>

        <div class="columns">
          <div class="column">
            First column
          </div>
          <div class="column">
            Second column
          </div>
        </div> {/* end row 1 */}
        <div class="columns">
          <div class="column">
            First column
          </div>
          <div class="column">
            Second column
          </div>
        </div> {/* end row 2 */}
      </div>
    </div>
  )
}

const projectContainer = {
  backgroundColor: "#2F2F2F"
}

const section_title = {
  fontSize: '30px',
  fontFamily: 'FredokaOne',
  paddingTop: '5%',
  paddingBottom: '3%'
}

export default Projects;
