import React from 'react'

const RegistrationForm = ({ username, email, password, handleRegistrationChange, handleRegistrationSubmit }) => {

  return (
    <div className="container mt-5">
      <form className="text-center" onSubmit={handleRegistrationSubmit}>
        <div className="form-group mx-auto w-25">
          <input
            className="form-control"
            value={username}
            name="username"
            placeholder="Username"
            type="text"
            onChange={handleRegistrationChange}
          />
        </div>
        <div className="form-group mx-auto w-25">
          <input
            className="form-control"
            value={email}
            name="email"
            placeholder="Email"
            type="text"
            onChange={handleRegistrationChange}
          />
        </div>
        <div className="form-group mx-auto w-25">
          <input
            className="form-control"
            value={password}
            name="password"
            placeholder="password"
            type="password"
            onChange={handleRegistrationChange}
          />
        </div>
        <button type="submit" className="btn btn-secondary">Create Account</button>
      </form>
    </div>
  )
}

export default RegistrationForm
