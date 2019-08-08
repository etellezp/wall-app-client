import React from 'react'

const UserCard = ({ user }) => {
  let message = user.data.attributes.messages.map(m => <p key={m.id}>{m.content}</p>)
  return (
    <div>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4 mb-3">Hello {user.data.attributes.username}</h1>
            <h4 className="display-5 text-white mt-3">Your Messages:</h4>
          </div>
        </div>
      </div>
      <div className="container text-center w-50 mx-auto mt-3">
        <div className="row">
          <div className="col-12">
            { message.length > 0 ?
               <ul>
                <hr />
                <li><h3>{message}</h3></li>
                <hr />
              </ul>
               :
               "You have no messages"
             }
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
