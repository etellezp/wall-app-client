import React from 'react'

const MessageForm = () => {

  return (
    <div>
      <form>
        <input
          name="content"
          placeholder="Message Goes Here..."
          type="text"
        />

        <button type="submit">Add Message</button>
      </form>
    </div>
  )
}

export default MessageForm
