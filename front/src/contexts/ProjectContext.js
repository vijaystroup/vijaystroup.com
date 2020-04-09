import React, { createContext, useState } from 'react'

export const ProjectContext = createContext()

const ProjectContextProvider = (props) => {
  const [activated, setActivated] = useState(0)
  const [projects, setProjects] = useState([
    {
      id: 0,
      name: 'Cupid',
      img: '/static/imgs/cupid.png',
      active: 'is-active',
      icon: 'fas fa-heart'
    },
    {
      id: 1,
      name: 'Offline-Pass',
      img: '/static/imgs/offline_pass.png',
      active: '',
      icon: 'fas fa-lock'
    },
    {
      id: 2,
      name: 'Personal Website',
      img: '/static/imgs/personal_website.png',
      active: '',
      icon: 'fas fa-desktop'
    },
    {
      id: 3,
      name: 'Disney Data Science',
      img: '/static/imgs/disney_data_science.png',
      active: '',
      icon: 'fas fa-magic'
    }
  ])

  const toggleTab = (id) => {
    let updatedState = []
    
    projects.map((project) => {
      if(id === project.id) {
        updatedState.push({
          id: project.id,
          name: project.name,
          img: project.img,
          active: 'is-active',
          icon: project.icon
        })
      } else {
        updatedState.push({
          id: project.id,
          name: project.name,
          img: project.img,
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
