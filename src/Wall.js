import React from 'react'
import Message from './Message'
import { Link } from 'react-router-dom'
import './Wall.css'

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
    let message
    if (this.state.messages.length > 0) {
      message = this.state.messages.map(message => <Message key={message.id} message={message.attributes.content}/>)
    } else {
      message = <h3 className="text-white text-center">There are no messages, be the first one to add one!</h3>
    }
    return (
      <div className="Wall my-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <h1 className="display-3">Welcome to the Wall APP</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              {this.props.user === null ?
                <Link
                  className="btn btn-outline-light btn-lg"
                  to="/login">
                  Login to add a Message
                </Link>
                  :
                <Link
                  className="btn btn-outline-light btn-lg"
                  to="/message/new">
                  Add a Message
                </Link>
              }
            </div>
          </div>
        </div>
        <div className="container text-center w-50 mx-auto mt-3">
          <div className="row">
            <div className="col-12">
              <ul>
                {message}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Wall
