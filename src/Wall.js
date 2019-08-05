import React from 'react'
import Message from './Message'
import { Link } from 'react-router-dom'

class Wall extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
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

    fetch("http://localhost:3001/api/v1/messages", data)
      .then(response => response.json())
      .then(response => this.setState({
        messages: response.data
      }))
  }

  render() {
    let message = this.state.messages.map(message => <Message key={message.id} message={message.attributes.content}/>)
    return (
      <div>
        <h1>Welcome to the Wall APP</h1>
        {this.props.user === null ? <Link to="/login">Login</Link> : <Link to="/message/new">Add a Message</Link>}
        {message}
      </div>
    )
  }
}

export default Wall
