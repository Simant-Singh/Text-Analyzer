import React, { useState } from 'react'
import "./Contact.css"


export default function Contact(props) {
  const [contactUsMsg, updateContactUsMsg] = useState("")
  let onChangeHandle=(e)=>{
    updateContactUsMsg(e.target.value)
  }
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p style={props.textAreaColor}>Need additional information, want to report a defect or have a question or comment? Use below form or email us at contact us <code>@texttools.services</code> to share your feedbacks and experience about our services.</p>
      <div className="contact-details">
        <div className="name-container">
          <label htmlFor="name-input" style={props.textAreaColor}>Name: </label>
          <input type="text" id="name-input" placeholder="Enter your Name" name="name" />
        </div>
        <div className="email-container">
          <label htmlFor="email-input" style={props.textAreaColor}>Email: </label>
          <input type="email" id="email-input" placeholder="Enter your Email" name="email" />
        </div>
        <div className="textarea-container">
          <label htmlFor="text-area-contact"></label>
          <textarea id="text-area-contact" placeholder="Enter your Message" value={contactUsMsg} onChange={onChangeHandle}></textarea>
        </div>
      </div>
    </div>
  )
}
