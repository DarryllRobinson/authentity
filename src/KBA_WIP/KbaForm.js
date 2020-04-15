import React, { Component } from 'react';

class KbaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      surname: '',
      mobile: '',
      errormessage: '',
      submitted: false
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
    const clientID = '1';
    this.props.onDisplayChange(true, clientID);
    this.setState({submitted: true}
    , () => {
      if (this.checkBlock) {
        console.log('blocked');
      }
    });
  }

  checkBlock(clientID) {
    return true;
  }

  render() {
    const showSubmitButton = !this.state.submitted;
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
        {(showSubmitButton) && (
          <input type="submit" value="Submit" />
        )}
      </form>
    )
  }

}

export default KbaForm;
