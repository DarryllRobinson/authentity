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

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

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
      <table>
        <thead>
          <tr>
            <th>Please enter the following</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First name</td><td><input type="text" name="firstname" onChange={this.changeHandler}/></td>
          </tr>
          <tr>
            <td>Surname</td><td><input type="text" name="surname" onChange={this.changeHandler}/></td>
          </tr><tr>
            <td>Mobile number</td><td><input type="text" name="mobile" onChange={this.changeHandler}/>{this.state.errormessage}</td>
          </tr>
        </tbody>
      </table>

        <input type="submit" value="Submit" />
      </form>
    )
  }

}

export default KbaForm;

/*
render() {
  return (
    <form onSubmit={this.submitHandler}>
      <fieldset>
        <legend>First name </legend>
        <input type="text" name="firstname" onChange={this.changeHandler}/>
      </fieldset>
      <fieldset>
        <legend>Surname </legend>
        <input type="text" name="surname" onChange={this.changeHandler}/>
      </fieldset>

    </form>
  )
}
*/
