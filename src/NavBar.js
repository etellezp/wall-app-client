import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ currentUser }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink
        className="navbar-brand"
        exact to="/">
        Wall App
      </NavLink>
        {currentUser ?
          <div className="navbar-nav ml-auto">
            <NavLink
              className="nav-item nav-link"
              exact to={`/users/${currentUser.data.attributes.username}`}>
              Profile
              </NavLink>
            <NavLink
              className="nav-item nav-link"
              exact to="/logout">
              Log Out
            </NavLink>
          </div>
            :
          <div className="navbar-nav ml-auto">
            <NavLink
              className="nav-item nav-link"
              exact to="/login">
              Login
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              exact to="/register">
              Sign In
            </NavLink>
          </div>
        }
    </nav>
  )
}

export default NavBar
