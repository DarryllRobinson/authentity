import React, { Component } from 'react';
import AnswerRow from './AnswerRow';

class QuestionRow extends Component {
  render() {
    const question = this.props.question;
    const answers = this.props.answer;

    return (
      <tr>
        <td>{question}</td>
        <td><AnswerRow answers={answers} /></td>
      </tr>
    );
  }
}

export default QuestionRow;
