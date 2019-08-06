import React from 'react'

const MessageForm = ({ content, handleMessageChange, handleMessageSubmit }) => {

  return (
    <div>
      <form onSubmit={handleMessageSubmit}>
        <input
          name="content"
          placeholder="Message Goes Here..."
          type="text"
          value={content}
          onChange={handleMessageChange}
        />
        <button type="submit">Add Message</button>
      </form>
    </div>
  )
}

export default MessageForm
