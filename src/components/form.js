import React, { Component } from 'react'

import Content from "./content";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: null
    };

  }

  onClickEvent(e) {
    // this.setState({isVisible: !this.state.isVisible});      ///toogle event
    e.preventDefault();



    let User = this.props.users.filter(user => {
      return (user.authorization === "User" || user.authorization === 'admin') && user.email === this.email.value && user.password === this.password.value
    });



    if (User.length === 0) {
      let error = document.querySelector('#error');
      error.innerHTML = `Wrong username or password!`;
      setTimeout(function () { error.innerHTML = "" }, 2000);



      return true


    }


    let admin = this.props.users.filter(user => {
      return user.authorization === 'admin' && user.email === this.email.value && user.password === this.password.value
    });

    if (admin && admin.length > 0) {
      this.setState({ isVisible: true })
    }

    else {
      this.setState({ isVisible: false })


    }
    let error2 = document.querySelector('#error2');
    error2.innerHTML = `Login succes!`;
    setTimeout(function () { error2.innerHTML = "" }, 2000);
    //not operatör ile toogle event oluşturdum false ise true trueise false olucak
  }

  render() {


    const { isVisible } = this.state

    // const Email = document.getElementById("inputEmail3")


    return (

      <div className="container">


        <form>
          <div className="fas fa-envelope ">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          </div>

          <div className="col-sm-5">

            <input type="email" className="form-control " id="inputEmail3" placeholder="Enter Email"
              ref={(c) => this.email = c} name="email" />
          </div>
          <div>
            <div className="fas fa-lock">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            </div>
          </div>
          <div className="col-sm-5">

            <input type="password" className="form-control" id="inputPassword3" placeholder="Enter Password"
              ref={(c) => this.password = c} name="password" />

            <button onClick={this.onClickEvent.bind(this)} className="btn btn-primary mt-3" type="submit">Login</button>
            <div> <p id="error" className="error"> </p> </div>
            <div> <p id="error2" className="error2"> </p> </div>


            {
              this.state.isVisible !== null &&
              <Content isVisible={isVisible} />
            }

          </div>

        </form>
      </div>
    )
  }
}


export default Form
