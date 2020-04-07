import React from 'react';

const Landing = () => {
  return (
    <section style={heroStyle} className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 style={heroTitle} class="title">Vijay Stroup</h1>
          <h2 style={heroSubTitle} class="subtitle">Student | Programmer | Futurepreneur</h2>
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
      <a style={scrollDown} href="#about" className="has-text-centered"><i class="fas fa-chevron-circle-down is-size-2"></i></a>
    </section>
  )
}

const heroStyle = {
  backgroundColor: '#f2f4fb'
}

const heroTitle = {
  fontSize: '40px'
}

const heroSubTitle = {
  fontSize: '30px'
}

const scrollDown = {
  paddingBottom: '1%'
}

export default Landing;
