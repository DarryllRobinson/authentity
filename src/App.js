import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

class App extends Component {

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
      <div className="App">
        <header className="App-header">


          {
            !isAuthenticated() && (
              <div>
              <p>
                Welcome to Authentity!
              </p>
                      <Button
                        onClick={this.login.bind(this)}
                        style={{ cursor: "pointer" }}
                      >
                        Log In

                      </Button>
              </div>
          )}
          {
            isAuthenticated() && (
              <div>
                <Button

                    style={{ cursor: "pointer" }}
                  >
                    Process a customer
                  </Button>

                  <Button
                    onClick={this.goTo.bind(this, 'profile')}
                    style={{ cursor: "pointer" }}
                  >
                    Profile - coming soon
                  </Button>

                  <Button

                    style={{ cursor: "pointer" }}
                  >
                    How it works - coming soon
                  </Button>

                  <Button
                    onClick={this.logout.bind(this)}
                    style={{ cursor: "pointer" }}
                  >
                    Log Out
                  </Button>
              </div>
            )}

        </header>
      </div>
    );
  }
}

export default App;
