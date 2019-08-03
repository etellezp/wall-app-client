import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.email}
            name="email"
            placeholder="Email"
            type="text"
            onChange={this.handleChange}
          />
          <input
            value={this.state.password}
            name="password"
            placeholder="password"
            type="password"
            onChange={this.handleChange}
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    )
  }
}

export default Login
