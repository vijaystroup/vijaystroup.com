import React from 'react';

const Landing = () => {
  return (
    <section style={heroStyle} className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 class="title" style={heroTitleStyle}>Vijay Stroup</h1>
          <h2 class="subtitle" style={heroTitleStyle}>Student & Programmer</h2>
        </div>
      </div>
    </section>
  )
}

const heroStyle = {
  backgroundColor: 'black',
}

const heroTitleStyle = {
  color: 'white',
}

export default Landing;
