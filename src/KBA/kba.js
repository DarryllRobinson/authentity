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

class QuestionTable extends Component {
  render() {
    const rows = [];

    this.props.questions.forEach((question) => {
      rows.push(
        <QuestionRow
          question={question.questionTemplate}
          qType={question.questionType}
          key={question.qID} />
      );
    })

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
}

class SearchBox extends Component {
  render() {
    return (
      <KbaForm>
        Please input all the fields below
      </KbaForm>
    );
  }
}

class Kba extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <QuestionTable questions={this.props.questions} />
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
