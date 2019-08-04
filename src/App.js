import React from 'react'
import Wall from './Wall'
import Login from './Login'
import './App.css'
import { Switch, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>
        <NavLink exact to="/">Wall |</NavLink>
        <NavLink exact to="/login">Login |</NavLink>
      </div>

      <Switch>
        <Route exact path='/' component={Wall} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
