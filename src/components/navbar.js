import React, { Component } from 'react'


export class navbar extends Component {
    render() {

        return (

          <div className="container">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/#"><strong> <big>My Blog</big> </strong></a>
            <ul className=" navbar-nav">
              <li className="nav-item "><a  className="nav-link" href="/#">Home</a></li>
              <li className="nav-item "><a className="nav-link"  href="/#">About</a></li>
              <li className="nav-item "><a  className="nav-link" href="/#">About</a></li>
              <li className="nav-item "><a className="nav-link"  href="/#">Contact</a></li>
            </ul>
            </nav>



        </div>

        )
      }
    }

export default navbar
