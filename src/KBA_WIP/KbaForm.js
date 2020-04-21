import React, { Component } from 'react';

class KbaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      surname: '',
      mobile: '',
      clientID: 4,
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
    const clientID = this.state.clientID;
    //console.log('clientID:', clientID);
    this.props.onDisplayChange(true, clientID);
    this.setState({submitted: true}
    , () => {
      if (this.checkBlock(BLOCK, clientID)) {
        console.log('blocked');
      }
      console.log('not blocked');
    });
  }

  checkBlock(clientList, clientID) {
    console.log('clientList: ', clientList);
    console.log('clientID: ', clientID);
    const found = clientList.find(element => element === clientID);
    console.log('found: ', found);

    if (found) { return true; }
    return false;
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

const BLOCK = [1, 2, 3];

export default KbaForm;
