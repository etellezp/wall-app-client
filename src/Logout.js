import React from 'react'

const Logout = ({ logout }) => {
  return (
    <div>
      <form onSubmit={logout}>
        <input type="submit" value="Logout"/>
      </form>
    </div>
  )
}

export default Logout
