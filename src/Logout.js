import React from 'react'

const Logout = ({ logout }) => {
  return (
    <div className="container mt-5">
      <form className="text-center" onSubmit={logout}>
        <div className="form-group mx-auto w-50">
          <h3 className="display-4 text-white text-center mb-3">Come back soon!</h3>
          <h4 className="display-5 text-white text-center mb-3">Click the button to log out.</h4>
          <input className="btn btn-danger" type="submit" value="Logout"/>
        </div>
      </form>
    </div>
  )
}

export default Logout
