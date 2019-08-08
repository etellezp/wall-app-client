import React from 'react'

const MessageForm = ({ content, handleMessageChange, handleMessageSubmit }) => {

  return (
    <div className="container mt-5">
      <form className="text-center" onSubmit={handleMessageSubmit}>
        <div className="form-group w-25 mx-auto">
          <input
            className="form-control"
            name="content"
            placeholder="Message Goes Here..."
            type="text"
            value={content}
            onChange={handleMessageChange}
          />
        </div>
        <button type="submit" className="btn btn-secondary">Add Message</button>
      </form>
    </div>
  )
}

export default MessageForm
