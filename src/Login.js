import React from 'react'

const Login = ({ email, password, handleLoginChange, handleLoginSubmit }) => {

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <input
          value={email}
          name="email"
          placeholder="Email"
          type="text"
          onChange={handleLoginChange}
        />
        <input
          value={password}
          name="password"
          placeholder="password"
          type="password"
          onChange={handleLoginChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login
