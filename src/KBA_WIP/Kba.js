import React, { Component } from 'react';
import KbaForm from './KbaForm';
import QuestionTable from  './QuestionTable';

class Kba extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
      clientID: ''
    };

    this.handleDisplayChange = this.handleDisplayChange.bind(this);
  }

  handleDisplayChange(display, clientID) {
    this.setState({
      display: display,
      clientID: clientID
    }, () => {
      //checkBlock(clientID);
    });
  }

  render() {
    return (
      <div>
        <KbaForm
          onDisplayChange={this.handleDisplayChange}
        />
        <QuestionTable
          questions={this.props.questions}
          ideal={this.props.ideal}
          showQuestions={this.state.display}
        />
      </div>
    );
  }
}

export default Kba;
