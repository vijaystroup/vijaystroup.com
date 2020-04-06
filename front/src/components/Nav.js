import React, { useState } from 'react'

const HamNav = () => {
  return (
    <aside class="menu">
      <ul class="menu-list">
        <li><a href="/cli">CLI</a></li>
        <li><a href="/null">About</a></li>
        <li><a href="/null">Projects</a></li>
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
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28" />
          </a>

          <a role="button" className={hamClass.join(' ')}  aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleBurger}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/cli">CLI</a>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="/null">About</a>
            <a className="navbar-item" href="/null">Projects</a>
          </div>
        </div>
      </nav>

      { hamClass[hamClass.length - 1] === "is-active" ? <HamNav /> : null }
    </div>
  )
}

export default Nav;
