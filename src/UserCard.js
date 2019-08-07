import React from 'react'

const UserCard = ({ user }) => {
  let message = user.data.attributes.messages.map(m => <p key={m.id}>{m.content}</p>)
  return (
    <div>
      <h1>Hello {user.data.attributes.username}</h1>
      {message.length > 0 ? message : "You have no messages"}
    </div>
  )
}

export default UserCard
