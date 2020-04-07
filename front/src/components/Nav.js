import React, { useState } from 'react'

const HamNav = () => {
  return (
    <aside class="menu">
      <ul class="menu-list">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="/cli"><i style={{ color: 'red' }} className="fas fa-terminal"></i></a>
        </li>
      </ul>
    </aside>
  )
}

const Nav = () => {
  const initalHam = ["navbar-burger", "burger"]
  const [hamClass, setHamClass] = useState(initalHam)

  const toggleBurger = () => {
    if(hamClass[hamClass.length - 1] === "is-active") {
      setHamClass(initalHam)
    } else {
      setHamClass([...hamClass, "is-active"])
    }
  }

  return (
    <div>
      <nav style={navStyle} className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="/static/imgs/bitmoji.png" alt="bitmoji" />
            <p style={navbar_logo}>Vijay Stroup</p>
          </a>

          <a role="button" className={hamClass.join(' ')}  aria-label="menu" aria-expanded="false" data-target="nav" onClick={toggleBurger}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="nav" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#about">About</a>
            <a className="navbar-item" href="#projects">Projects</a>
            <a className="navbar-item" href="#contact">Contact</a>
            <a className="navbar-item" href="/cli"><i style={{ color: 'red' }} className="fas fa-terminal"></i></a>
          </div>
        </div>
      </nav>

      { hamClass[hamClass.length - 1] === "is-active" ? <HamNav /> : null }
    </div>
  )
}

const navbar_logo = {
  fontFamily: 'FredokaOne',
  fontSize: '20px',
  paddingLeft: '5px',
  color: 'black'
}

const navStyle = {
  boxShadow: '0 2px 5px 0 rgba(0,0,0,0.02), 0 2px 10px 0 rgba(0,0,0,0.05)'
}

export default Nav;
