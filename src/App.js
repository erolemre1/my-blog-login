import React, { Component } from 'react'

import Navbar from './components/navbar'
import Form from './components/form'
import UserConsumer from "./contex";

export class App extends Component {
  render() {
    return (
      <UserConsumer>
        {
          value => {

            const { users } = value;
            return (
              <div >
                <Navbar />
                <Form users={users} />
              </div>
            )
          }
        }
      </UserConsumer>


    )
  }
}


export default App
