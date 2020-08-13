// Things to do ->
// * load in text files from static/txt
// * map through different projects as to not repeat code and change text

import React from 'react'

export const Cupid = () => {
  return (
    <div>
      <h1 style={{ color: '#BD302A' }} className="has-text-centered projTitle">Cupid</h1>
      <br />
      <h2 className="projSubtitle">Overview</h2>
      <p>
        Cupid is a discord bot that creates a marriage system where players in your server
        can marry eachother and gain experience points together. The point is for couples
        to try to gain the most experience on their server for bragging rights.
      </p>
      <br />
      <h2 className="projSubtitle">Language(s) & Unique Features</h2>
      <ul>
        <li>- Python, SQL</li>
        <li>- Player expirence unique to server.</li>
        <li>- Auto-updating leaderboard with PIL Python library.</li>
      </ul>
      <br />
      <h2 className="projSubtitle">Links</h2>
      <ul>
        <li><a href="https://github.com/VijayStroup/Cupid-Bot" target="_blank">- GitHub</a></li>
        <li><a href="https://top.gg/bot/613044146952732682" target="_blank">- Top.gg</a></li>
      </ul>
    </div>
  )
}

export const OfflinePass = () => {
  return (
    <div>
      <h1 style={{ color: '#F69D2B' }} className="has-text-centered projTitle">Offline-Pass</h1>
      <br />
      <h2 className="projSubtitle">Overview</h2>
      <p>
        Offline Pass is an offline password manager. This means none of your information is
        stored in the 'cloud'. Even with your information being stored locally, all data
        is either hashed or encrypted (no plain text anywhere).
      </p>
      <br />
      <h2 className="projSubtitle">Language(s) & Unique Features</h2>
      <ul>
        <li>- Python, SQL</li>
        <li>- Modern password storing (e.g. hashing and encryption).</li>
        <li>- Windows installer for Offline Pass - Python is not required.</li>
        <li>- UI built with Tkinter.</li>
      </ul>
      <br />
      <h2 className="projSubtitle">Links</h2>
      <ul>
        <li><a href="https://github.com/VijayStroup/Offline-Pass" target="_blank">- GitHub</a></li>
      </ul>
    </div>
  )
}

export const PersonalWebsite = () => {
  return (
    <div>
      <h1 style={{ color: '#001C2C' }} className="has-text-centered projTitle">Personal Website</h1>
      <br />
      <h2 className="projSubtitle">Overview</h2>
      <p>
        vijaystroup.com is my personal website. This is a central hub where all my projects are located
        and ways in which to get in contact with me.
        With the combination of not being a good graphic designer and having a technical background, the
        best solution I thought of for my website was a design that simulated a terminal emulator.
      </p>
      <br />
      <h2 className="projSubtitle">Language(s) & Unique Features</h2>
      <ul>
        <li>- Python, JavaScript(Vanilla, NodeJS, ReactJS), HTML, CSS, JSON</li>
        <li>- Flask for handling backend web configuration.</li>
        <li>- Python and javascript(vanilla) interaction for cli.</li>
        <li>- Simulated terminal emulator.</li>
        <li>- Python Flask serving ReactJS for frontend.</li>
      </ul>
      <br />
      <h2 className="projSubtitle">Links</h2>
      <ul>
        <li><a href="https://github.com/VijayStroup/vijaystroupCOM" target="_blank">- GitHub</a></li>
        <li><a href="/">- vijaystroup.com</a></li>
      </ul>
    </div>
  )
}

export const DisneyDataScience = () => {
  return (
    <div>
      <h1 style={{ color: '#ED9FC3' }} className="has-text-centered projTitle">Disney Data Science</h1>
      <br />
      <h2 className="projSubtitle">Overview</h2>
      <p>
        This project was my introduction to data science. In this project, I did many different
        plots and reports with data such as Disney's movie's revenue, and Disney Parks' ride waiting
        time. In the end, I made algorithm which asks for a users input, and will return the best
        route they should take through a Disney Park to minimize line waiting time.
      </p>
      <br />
      <h2 className="projSubtitle">Language(s) & Unique Features</h2>
      <ul>
        <li>- Python</li>
        <li>- Many charts and plots showing the data visually.</li>
        <li>- Reports based on the data.</li>
        <li>- Algorithm to find the best route at a certain Disney Park to minimize line waiting time.</li>
      </ul>
      <br />
      <h2 className="projSubtitle">Links</h2>
      <ul>
        <li><a href="https://github.com/VijayStroup/Disney-Visualization" target="_blank">- GitHub</a></li>
      </ul>
    </div>
  )
}

export const MarketWatch = () => {
  return (
    <div>
      <h1 style={{ color: '#00FF44' }} className="has-text-centered projTitle">MarketWatch</h1>
      <br />
      <h2 className="projSubtitle">Overview</h2>
      <p>
        This project came about with a problem I was having. I wanted to invest in the stock
        market when the S&P500 dropped - in the day - 2% or more. Instead of having to
        constantly check myself, I wrote a program that checks the current price of the day,
        and if it meets the 2% threshold, will send me a text message. I then set up a cronjob
        to run the script every hour, thus achieving complete autonomy.
      </p>
      <br />
      <h2 className="projSubtitle">Language(s) & Unique Features</h2>
      <ul>
        <li>- Python</li>
        <li>- Sending text messages with google's smtp server.</li>
      </ul>
      <br />
      <h2 className="projSubtitle">Links</h2>
      <ul>
        <li><a href="https://github.com/VijayStroup/MarketWatch" target="_blank">- GitHub</a></li>
      </ul>
    </div>
  )
}

export const BlastOff = () => {
  return (
    <div>
      <h1 style={{ color: '#FF010E' }} className="has-text-centered projTitle">BlastOff</h1>
      <br />
      <h2 className="projSubtitle">Overview</h2>
      <p>
        BlastOff is a graphical user interface for viewing rocket sensors during the
        launch phase of a rocket. The incoming data is just simulated without real
        sensors and the graphical user interface is representative of that data. The
        "fake" sensors record the data of the rocket's thrust, velocity, air pressure,
        altitude, and temperature.
      </p>
      <br />
      <h2 className="projSubtitle">Language(s) & Unique Features</h2>
      <ul>
        <li>- C++</li>
        <li>- GUI.</li>
        <li>- Fake sensor data calculations.</li>
      </ul>
      <br />
      <h2 className="projSubtitle">Links</h2>
      <ul>
        <li><a href="https://github.com/VijayStroup/BlastOff" target="_blank">- GitHub</a></li>
      </ul>
    </div>
  )
}