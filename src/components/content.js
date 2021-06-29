import React, { Component } from 'react'


export class content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isVisited: true,

    };



  };

  onClickCancel(e) {

    e.preventDefault();

    this.setState({ isVisited: !this.state.isVisited });
    ///toggle event




  };
  onChangeClick(e) {
    e.preventDefault();



    let alert = document.querySelector('#alert');
    alert.innerHTML = `Your changes have been saved! `;
    setTimeout(function () { alert.innerHTML = "" }, 2000);

    const paragraph = document.querySelector(".paragraph").value;

    localStorage.setItem("paragraph",JSON.stringify(paragraph));

   
  };

  onDeleteClick(e) {

    e.preventDefault();

    let alert2 = document.querySelector('#alert2');
    alert2.innerHTML = `Your text  is deleted! `;
    setTimeout(function () { alert2.innerHTML = "" }, 2000);

 


    this.setState({ value: " " })

    const paragraph = document.querySelector(".paragraph").value;

    localStorage.setItem("paragraph",JSON.stringify(""));


  };

  componentDidMount() {
    let prgLS = JSON.parse(localStorage.getItem('paragraph'));
    this.setState({
      value: prgLS
    })
  }

  render() {

    const { isVisited } = this.state;
  

    return (
      
      <div className="container">
        <div>
          <h1><strong> My Thoughts </strong></h1>
          {isVisited ? <textarea disabled={!this.props.isVisible}  className="paragraph" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })}>
          </textarea> : null}
          <div> <p id="alert" className="Alert">
          </p></div>
          <div> <p id="alert2" className="Alert2">
          </p></div>
          <div className="buttons">
            {this.props.isVisible &&
              <>
                <button type="submit" className="btn btn-warning btn-sm mt-3">
                  <i className="far fa-edit" onClick={this.onChangeClick.bind(this)}> Save Changes</i>
                </button>
                <button type="submit" className="btn btn-danger btn-sm mt-3">
                  <i className="fas fa-times" onClick={this.onDeleteClick.bind(this)}> Delete</i>
                </button>
                <button type="submit" className="btn btn-secondary btn-sm mt-3">
                  <i className="fas fa-arrow-circle-left" onClick={this.onClickCancel.bind(this)}> Cancel</i>
                </button>
              </>
            }

          </div>
        </div>
      </div>
    )
  }
}

export default content;
