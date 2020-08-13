import React, { createContext, useState } from 'react'

export const ProjectContext = createContext()

const ProjectContextProvider = (props) => {
  const [activated, setActivated] = useState(0)
  const [projects, setProjects] = useState([
    {
      id: 0,
      name: 'Cupid',
      active: 'is-active',
      icon: 'fas fa-heart'
    },
    {
      id: 1,
      name: 'Offline-Pass',
      active: '',
      icon: 'fas fa-lock'
    },
    {
      id: 2,
      name: 'Personal Website',
      active: '',
      icon: 'fas fa-desktop'
    },
    {
      id: 3,
      name: 'Disney Data Science',
      active: '',
      icon: 'fas fa-magic'
    },
    {
      id: 4,
      name: 'MarketWatch',
      active: '',
      icon: 'fas fa-chart-line'
    },
    {
      id: 5,
      name: 'BlastOff',
      active: '',
      icon: 'fas fa-rocket'
    }
  ])

  const toggleTab = (id) => {
    let updatedState = []
    
    projects.map((project) => {
      if(id === project.id) {
        updatedState.push({
          id: project.id,
          name: project.name,
          active: 'is-active',
          icon: project.icon
        })
      } else {
        updatedState.push({
          id: project.id,
          name: project.name,
          active: '',
          icon: project.icon
        })
      }
    })    

    setActivated(id)
    setProjects(updatedState)
  }


  return (
    <ProjectContext.Provider value={{ projects, toggleTab, activated }}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectContextProvider
