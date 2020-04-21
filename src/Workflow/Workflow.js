import React, { Component } from 'react';
import KbaForm from '../KBA/KbaForm';

class Workflow extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3">
            <KbaForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Workflow;
