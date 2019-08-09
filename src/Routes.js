import React from 'react'
import Wall from './Wall'
import UserCard from './UserCard'
import MessageForm from './MessageForm'
import Login from './Login'
import RegistrationForm from './RegistrationForm'
import Logout from './Logout'
import { Switch, Route } from 'react-router-dom'

const Routes = ({
  currentUser,
  handleMessageChange,
  handleMessageSubmit,
  messageForm,
  handleLoginChange,
  handleLoginSubmit,
  loginForm,
  handleRegistrationChange,
  handleRegistrationSubmit,
  registrationForm,
  logout
}) => {
  return (
    <>
      <Switch>
        <Route exact path='/'
          render={(props) => <Wall {...props}
            user={currentUser}
          />}
        />
        <Route exact path="/users/:username"
          render={(props) => !!currentUser ? <UserCard {...props}
            user={currentUser}
          /> : "Please log in"}
        />
        <Route exact path="/message/new"
          render={(props) => currentUser.data.attributes.email_confirmed ? <MessageForm {...props}
          handleMessageChange={handleMessageChange}
          handleMessageSubmit={handleMessageSubmit}
          content={messageForm.content}
          /> : alert("You need to confirm your email in order to add a message")}
        />
        <Route
          exact path='/login'
          render={(props) => <Login {...props}    handleLoginChange={handleLoginChange}  handleLoginSubmit={handleLoginSubmit}
          email={loginForm.email}
          password={loginForm.password}
          />}
        />
        <Route
          exact path="/register"
          render={(props) => <RegistrationForm {...props}
          handleRegistrationChange={handleRegistrationChange}
          handleRegistrationSubmit={handleRegistrationSubmit}
          username={registrationForm.username}
          email={registrationForm.email}
          password={registrationForm.password}
          />}
        />
        <Route
          exact path="/logout"
          render={(props) => <Logout {...props}
          logout={logout}
          />}
        />
      </Switch>
    </>
  )
}

export default Routes
