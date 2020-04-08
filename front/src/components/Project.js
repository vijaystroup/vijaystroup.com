import React, { useContext } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'
import path from 'path'

const Project = () => {
  const { projects } = useContext(ProjectContext);
  console.log(path.resolve(__filename))

  const file = new XMLHttpRequest()
  file.open('GET', '', true)
  console.log(file.responseText)
  file.onreadystatechange = () => {
    console.log('state change')
  }

  return (
    <div>
      {/* project Cupid */}

      {/* project Offline-Pass */}

      {/* project Personal Website */}

      {/* project Disney Data Science */}
    </div>
  )
}

export default Project
