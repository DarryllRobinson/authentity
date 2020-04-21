import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import auth0Client from './Auth/Auth';
import NavBar from './NavBar/NavBar';
import Callback from './Callback/Callback';
import Kba from './KBA_WIP/Kba';
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
        <SecuredRoute exact path='/kba'
          component={Kba}
          checkingSession={this.state.checkingSession}

            questions={QUESTIONS}
            answers={ANSWERS}
            authset={AUTHSET}
            ideal={IDEAL}
          
        />
        {/*<Route path='./test' component={Test}/>*/}
      </div>
    );
  }
}

const QUESTIONS = [
  {authID: '1', question: 'Have you ever lived at <Address>?'},
  {authID: '2', question: 'What is/was your address?'},
  {authID: '3', question: 'How old were you on your last birthday?'},
  {authID: '4', question: 'Are you married to <Spouse>?'},
  {authID: '5', question: 'Are you a director of <CompanyName>?'}
];

const ANSWERS = [
  {authID: '1', answer: 'First answer1'},
  {authID: '1', answer: 'Second answer1'},
  {authID: '1', answer: 'Third answer1'},
  {authID: '1', answer: 'Fourth answer1'},
  {authID: '1', answer: 'Fifth answer1'}
];

/*const ANSWERS2 = [
  {authID: '2', answer: 'First answer2'},
  {authID: '2', answer: 'Second answer2'},
  {authID: '2', answer: 'Third answer2'},
  {authID: '2', answer: 'Fourth answer2'},
  {authID: '2', answer: 'Fifth answer2'}
];*/

const AUTHSET = [
  {authID: '1', question: 'Have you ever lived at 31 Shannan Place, Kenmore Hills, Brisbane?', answer1: 'Yes', answer2: 'No'},
  {authID: '2', question: 'How old were you on your last birthday?', answer1: '20', answer2: '30', answer3: '40', answer4: '50', answer5: '60'},
];

const IDEAL = [
  {authID: '1', question: 'How old were you on your last birthday?', ANSWERS},
  {authID: '2', question: 'How many legs do you have?', ANSWERS}
];

export default withRouter(App);
