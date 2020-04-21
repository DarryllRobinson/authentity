import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import auth0Client from './Auth/Auth';
import NavBar from './NavBar/NavBar';
import Callback from './Callback/Callback';
import Workflow from './Workflow/Workflow';
//import Test from './Workflow/test';
import SecuredRoute from './SecuredRoute/SecuredRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    }
  }

  async componentDidMount() {
    if (this.props.location.pathname === '/callback') return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute exact path='/workflow'
          component={Workflow}
          checkingSession={this.state.checkingSession}
        />
        {/*<Route path='./test' component={Test}/>*/}
      </div>
    );
  }
}

export default withRouter(App);
