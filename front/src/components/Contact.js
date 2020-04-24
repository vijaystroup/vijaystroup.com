// Things to do ->
// * use one object in useState and update only that property of the object onChange

import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const formSubmit = (e) => {
    e.preventDefault()

    const body = JSON.stringify({ name, email, message })
    // fetch('https://www.vijaystroup.com/email', { method: 'post', body })
    fetch('http://localhost/email', { method: 'post', body })
    setSent(true)
  }

  return (
    <div className="container">
    <h1 id="contact" className="sectionTitle">Contact</h1>

    {!sent
    ? (
        <form method="post" onSubmit={formSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left">
              <input className="input" type="text" name="name" placeholder="John Doe" required 
                value={name} onChange={(e) => setName(e.target.value)} />
              <span className="icon is-small is-left">
                <i className="fas fa-signature"></i>
              </span>
            </div>
          </div> {/* end name */}
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
              <input className="input" type="text" name="email" placeholder="j.doe@example.com" required 
                value={email} onChange={(e) => setEmail(e.target.value)} />
              <span className="icon is-small is-left">
                <i className="fas fa-at"></i>
              </span>
            </div>
          </div> {/* end email */}
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea style={{ resize: 'none' }} className="textarea" name="message" placeholder="Message" 
                required value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
          </div> {/* end message */}
          <div className="control has-text-centered contactBtnDiv">
            <button id="contactBtn" className="button">Submit</button>
          </div>
        </form>
      )
    : <p id="sentThankYou" className="has-text-centered">Your message has been sent!<br />Thank you, {name}.</p>
    }
    </div>
  )
}

export default Contact
