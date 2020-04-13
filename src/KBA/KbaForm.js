import React, { Component } from 'react';

class KbaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      surname: '',
      mobile: '',
      errormessage: ''
    }
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "mobile") {
      if (val !=="" && !Number(val)) {
        err = <strong>Your mobile must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }

  submitHandler = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <ul style={{ listStyleType: "none" }}>
          <li>First name <input type="text" name="firstname" onChange={this.changeHandler}/></li>
          <li>Surname <input type="text" name="surname" onChange={this.changeHandler}/></li>
          <li>Mobile number <input type="text" name="mobile" onChange={this.changeHandler}/>{this.state.errormessage}</li>
        </ul>

        <input type="submit" />
      </form>
    )
  }
}

export default KbaForm;
