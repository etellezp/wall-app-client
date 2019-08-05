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

  handleLoginChange = (event) => {
    const {name, value} = event.target
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value
      }
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()

    const userData = this.state.loginForm

    let data = {
      method: 'POST',
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: userData
      })
    }

    fetch("http://localhost:3001/login", data)
      .then(response => response.json())
      .then(response => {
        if (response.error){
          alert("Invalid Login")
        } else {
          this.setState({
            currentUser: response.user,
            loginForm: {
              email: "",
              password: ""
            }
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
          {this.state.currentUser !== null ? this.state.currentUser.data.attributes.username : "No one log in"}
        </div>
        <Switch>
          <Route exact path='/' component={Wall} />
          <Route
            exact path='/login'
            render={(props) => <Login {...props}    handleLoginChange={this.handleLoginChange}  handleLoginSubmit={this.handleLoginSubmit}
            email={this.state.loginForm.email}
            password={this.state.loginForm.password}
            />}
          />
        </Switch>
      </div>
    )
  }
}

export default App;
