import React from 'react';

const Projects = () => {
  return (
    <div className="sectionContainer">
      <div className="container">
        <h1 id="projects" className="sectionTitle">Projects</h1>

        <div className="columns is-centered">
          <div className="column" onClick={console.log('hehe')}>
            <img className="projImg" src="/static/imgs/cupid.png" />
          </div>
          <div className="column">
            <img className="projImg" src="/static/imgs/offline_pass.png" />
          </div>
          <div className="column">
            <img className="projImg" src="/static/imgs/personal_website.png" />
          </div>
          <div className="column">
            <img className="projImg" src="/static/imgs/disney_data_science.png" />
          </div>
        </div> {/* end row 1 */}
        <h1 id="moreToCome" className="has-text-centered">More to come :)</h1>
      </div>
    </div>
  )
}

export default Projects;
