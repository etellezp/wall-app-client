import React from 'react'
import "./Message.css"

const Message = ({ message }) => {
  return (
    <div className="Message">
      <hr />
      <li><h3>{message}</h3></li>
    </div>
  )
}

export default Message
