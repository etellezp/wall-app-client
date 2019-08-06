import React from 'react'
import Wall from './Wall'
import Login from './Login'
import Logout from './Logout'
import MessageForm from './MessageForm'
import './App.css'
import { Switch, Route, NavLink, withRouter } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      loginForm: {
        email: "",
        password: ""
      },
      messageForm: {
        content: ""
      }
    }
  }

  componentDidMount() {
    this.fetchCurrentUser()
  }

  fetchCurrentUser = () => {
    let data = {
      method: 'GET',
      credentials: "include",
      headers: {
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
            ...this.state.currentUser,
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
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: userData
      })
    }

    fetch("http://localhost:3001/api/v1/login", data)
      .then(response => response.json())
      .then(response => {
        if (response.error){
          alert(response.error)
        } else {
          this.setState({
            currentUser: response.user,
            loginForm: {
              email: "",
              password: ""
            }
          })
          this.props.history.push("/")
          this.fetchCurrentUser()
        }
      })
      .catch(console.log)
  }

  logout = (event) => {
    event.preventDefault()

    let data = {
      method: 'DELETE',
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }

    fetch("http://localhost:3001/api/v1/logout", data)
      .then(response => response.json())
      .then(response => {
        this.setState({
          currentUser: null
        })
        this.props.history.push("/")
      })

  }

  handleMessageChange = (event) => {
    const {name, value} = event.target
    this.setState({
      messageForm: {
        ...this.state.messageForm,
        [name]: value
      }
    })
  }

  handleMessageSubmit = (event) => {
    event.preventDefault()

    const messageData = this.state.messageForm


    let data = {
      method: 'POST',
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messageData
      })
    }

    fetch("http://localhost:3001/api/v1/messages", data)
      .then(response => response.json())
      .then(response => console.log(response))
  }

  render() {

    return (
      <div className="App">
        <div>
          <NavLink exact to="/">Wall |</NavLink>
          <NavLink exact to="/login">Login |</NavLink>
          <NavLink exact to="/logout">Log Out |</NavLink>
          {this.state.currentUser ? this.state.currentUser.data.attributes.username : "No one logged in"}
        </div>
        <Switch>
          <Route exact path='/'
            render={(props) => <Wall {...props}
              user={this.state.currentUser}
            />}
          />
          <Route exact path="/message/new"
            render={(props) => <MessageForm {...props}
            handleMessageChange={this.handleMessageChange}
            handleMessageSubmit={this.handleMessageSubmit}
            content={this.state.messageForm.content}
            />}
          />
          <Route
            exact path='/login'
            render={(props) => <Login {...props}    handleLoginChange={this.handleLoginChange}  handleLoginSubmit={this.handleLoginSubmit}
            email={this.state.loginForm.email}
            password={this.state.loginForm.password}
            />}
          />
          <Route
            exact path="/logout"
            render={(props) => <Logout {...props}
            logout={this.logout}
            />}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
