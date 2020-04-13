import React, { Component } from 'react';
import KbaForm from './KbaForm';

class Kba extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="Kba">
        {
          !isAuthenticated() && (
            <div>
              <p>
                Please login
              </p>
            </div>
          )
        }

        {
          isAuthenticated() && (
            <div>
              Knowledge Based Authentication

              <KbaForm>
                Please input all the fields below
              </KbaForm>

            </div>
          )
        }
      </div>
    );
  }
};

export default Kba;
