import React from 'react'

import Nav from './components/Nav' 
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'

import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Projects />
    </div>
  )
}

export default App;
