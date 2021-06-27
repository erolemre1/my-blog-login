import React, { Component } from 'react'
const Usercontext = React.createContext();

export class UserProvider extends Component {
  state = {

    users: [

      {
        id: 1,
        authorization: "admin",
        email: "admin@gmail.com",
        password: "admin",

      },
      {
        id: 2,
        authorization: "User",
        email: "user1@gmail.com",
        password: "user1"
      },
      {
        id: 3,
        authorization: "User",
        email: "user2@gmail.com",
        password: "user2"
      },
      {
        id: 3,
        authorization: "User",
        email: "user3@gmail.com",
        password: "user3",

      },
    ]
  }


  render() {
    return (

      <Usercontext.Provider value={this.state}>
        {this.props.children}

      </Usercontext.Provider>
      /*   {this.props.children} <- burası app.js temsi ediyor */
    )
  }
}

const UserConsumer = Usercontext.Consumer;


export default UserConsumer;

/// context te provider ve consumer kullanmamız gerekli


