import React, { useContext } from 'react'
import Project from './Project'
import { ProjectContext } from '../contexts/ProjectContext'

const Projects = () => {
  const { projects, toggleTab } = useContext(ProjectContext);

  return (
    <div className="sectionContainer">
      <div className="container">
        <h1 id="projects" className="sectionTitle">Projects</h1>

        <div className="columns is-centered">
          {projects.map((project) => {
            return (
              <div className="column">
                <img key={project.id} className="projImg" src={project.img} onClick={() => toggleTab(project.id)} />
              </div>
            )
          })}
        </div>

        <div style={{ paddingTop: '2%' }} class="tabs is-centered">
          <ul>
            {projects.map((project) => {
              return (
                <li key={project.id} class={project.active} onClick={() => toggleTab(project.id)}>
                  <a>
                    <span class="icon is-small"><i class={project.icon} aria-hidden="true"></i></span>
                    <span>{project.name}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <Project />

        <h1 id="moreToCome" className="has-text-centered">More to come :)</h1>
      </div>
    </div>
  )
}

export default Projects;
