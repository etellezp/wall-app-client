import React from 'react'

const Login = ({ email, password, handleLoginChange, handleLoginSubmit }) => {

  return (
    <div className="container mt-5">
      <form className="text-center" onSubmit={handleLoginSubmit}>
        <div className="form-group mx-auto w-25">
          <input
            className="form-control"
            value={email}
            name="email"
            placeholder="Email"
            type="text"
            onChange={handleLoginChange}
          />
        </div>
        <div className="form-group mx-auto w-25">
          <input
            className="form-control"
            value={password}
            name="password"
            placeholder="password"
            type="password"
            onChange={handleLoginChange}
          />
        </div>
        <button type="submit" className="btn btn-secondary">Log In</button>
      </form>
    </div>
  )
}

export default Login
