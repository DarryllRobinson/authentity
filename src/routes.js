import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
//import Home from './Home/Home';

import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Kba from './KBA_WIP/Kba';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {

  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/kba" render={(props) => {
            handleAuthentication(props);
            return <Kba auth={auth} {...props} questions={QUESTIONS} answers={ANSWERS} authset={AUTHSET} ideal={IDEAL} />
          }} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
  );
}


/*const QUESTIONTEMPLATES = [
  {qID: 'Q0001', questionTemplate: 'Have you ever lived at <Address>?', questionType: 'yesno'},
  {qID: 'Q0002', questionTemplate: 'What is/was your address?', questionType: 'dropdown'},
  {qID: 'Q0003', questionTemplate: 'How old were you on your last birthday?', questionType: 'dropdown'},
  {qID: 'Q0004', questionTemplate: 'Are you married to <Spouse>?', questionType: 'yesno'},
  {qID: 'Q0005', questionTemplate: 'Are you a director of <CompanyName>?', questionType: 'yesno'}
];*/

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
