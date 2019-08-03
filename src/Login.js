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
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch("http://localhost:3001/api/v1/login", data)
      .then(response => response.json())
      .then(response => console.log(response))
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
