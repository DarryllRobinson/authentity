import React, { Component } from 'react';
import QuestionRow from './QuestionRow';

class QuestionTable extends Component {
  render() {
    const rows = [];
    //const display = this.props.showQuestions;
    let display = true;

    if (this.props.questions) {
      this.props.ideal.forEach((question) => {
        rows.push(
          <QuestionRow
            question={question.question}
            answer={question.ANSWERS}
            key={question.authID} />
        );
      });
    } else {

      display = false;
      console.log('display: ', display);
    }

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
      <div>Error: No questions were sent from the database</div>
    );
  }
}

export default QuestionTable;
