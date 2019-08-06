import React from 'react'

const RegistrationForm = ({ username, email, password, handleRegistrationChange, handleRegistrationSubmit }) => {

  return (
    <div>
      <form onSubmit={handleRegistrationSubmit}>
        <input
          value={username}
          name="username"
          placeholder="Username"
          type="text"
          onChange={handleRegistrationChange}
        />
        <input
          value={email}
          name="email"
          placeholder="Email"
          type="text"
          onChange={handleRegistrationChange}
        />
        <input
          value={password}
          name="password"
          placeholder="password"
          type="password"
          onChange={handleRegistrationChange}
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default RegistrationForm
