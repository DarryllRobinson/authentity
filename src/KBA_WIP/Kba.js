import React, { Component } from 'react';
import KbaForm from './KbaForm';

class AnswerRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({answer: event.target.value});
  }

  render() {
    const rows = [];

    this.props.answers.forEach((answer) => {
      rows.push(
        <option value={answer.answer} key={answer.answer}>{answer.answer}</option>
      );
    })

    return (
      <select value={this.state.answer} onChange={this.handleChange}>
        <option value="missing">Please select</option>
        {rows}
        <option value="none">None of the above</option>
      </select>
    );
  }
}

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

class QuestionTable extends Component {
  render() {
    const rows = [];
    //const display = this.props.showQuestions;
    const display = true;

    this.props.ideal.forEach((question) => {
      rows.push(
        <QuestionRow
          question={question.question}
          answer={question.ANSWERS}
          key={question.authID} />
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
          ideal={this.props.ideal}
          showQuestions={this.state.display}
        />
      </div>
    );
  }
}

export default Kba;
