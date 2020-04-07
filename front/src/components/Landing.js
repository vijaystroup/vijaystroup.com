import React from 'react'

const Landing = () => {
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 style={{ fontSize: '40px' }} class="title">Vijay Stroup</h1>
          <h2 style={{ fontSize: '30px' }} class="subtitle">Student | Programmer | Futurepreneur</h2>
          <div className="columns is-centered">
            <div className="column is-narrow">
            <a><i class="fab fa-github is-size-1"></i></a>
            </div>
            <div className="column is-narrow">
              <a><i class="fab fa-linkedin is-size-1"></i></a>
            </div>
            <div className="column is-narrow">
              <a><i class="fab fa-bitbucket is-size-1"></i></a>
            </div>
            <div className="column is-narrow">
              <a><i class="fab fa-gitlab is-size-1"></i></a>
            </div>
          </div>
        </div>
      </div>
      <a style={{ paddingBottom: '1%' }} href="#about" className="has-text-centered"><i class="fas fa-chevron-circle-down is-size-2"></i></a>
    </section>
  )
}

export default Landing
