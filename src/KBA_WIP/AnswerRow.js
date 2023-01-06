import React, { Component } from 'react';

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

export default AnswerRow;
