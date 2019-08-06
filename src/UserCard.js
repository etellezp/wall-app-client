import React from 'react'

const UserCard = ({ user }) => {
  return (
    <div>
      <h1>Hello {user.data.attributes.username}</h1>
    </div>
  )
}

export default UserCard
