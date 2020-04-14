import React, { Component } from 'react';
import KbaForm from './KbaForm';

class QuestionRow extends Component {
  render() {
    const question = this.props.question;
    const type = this.props.qType;

    return (
      <tr>
        <td>{question}</td>
        <td>{type}</td>
      </tr>
    );
  }
}

/*function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}*/

class QuestionTable extends Component {
  render() {
    const rows = [];
    const display = this.props.showQuestions;

    this.props.questions.forEach((question) => {
      rows.push(
        <QuestionRow
          question={question.questionTemplate}
          qType={question.questionType}
          key={question.qID} />
      );
    })

    if (display) {
      return (
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      );
    }
    return (
      <div></div>
    );
  }
}

class Kba extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false
    };

    this.handleDisplayChange = this.handleDisplayChange.bind(this);
  }

  handleDisplayChange(display) {
    this.setState({
      display: display
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
          showQuestions={this.state.display}
        />
      </div>
    );
  }
}

/*const QUESTIONS = [
  {qID: 'Q0001', questionTemplate: 'Have you ever lived at <Address>?', questionType: 'yesno'},
  {qID: 'Q0002', questionTemplate: 'What is/was your address?', questionType: 'dropdown'},
  {qID: 'Q0003', questionTemplate: 'How old were you on your last birthday?', questionType: 'dropdown'},
  {qID: 'Q0004', questionTemplate: 'Are you married to <Spouse>?', questionType: 'yesno'},
  {qID: 'Q0005', questionTemplate: 'Are you a director of <CompanyName>?', questionType: 'yesno'}
];*/

export default Kba;
