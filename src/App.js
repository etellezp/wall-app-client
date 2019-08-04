import React from 'react'
import Wall from './Wall'
import Login from './Login'
import './App.css'
import { Switch, Route, NavLink } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      loginForm: {
        email: "",
        password: ""
      }
    }
  }

  componentDidMount() {
    let data = {
      method: 'GET',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    fetch("http://localhost:3001/api/v1/get_current_user", data)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          this.setState({
            currentUser: response
          })
        }
      })
      .catch(console.log)
  }

  render() {

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
    )
  }
}

export default App;
