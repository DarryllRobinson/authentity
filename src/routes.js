import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
//import Home from './Home/Home';

import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Kba from './KBA/Kba';


const auth = new Auth();

const QUESTIONS = [
  {qID: 'Q0001', questionTemplate: 'Have you ever lived at <Address>?', questionType: 'yesno'},
  {qID: 'Q0002', questionTemplate: 'What is/was your address?', questionType: 'dropdown'},
  {qID: 'Q0003', questionTemplate: 'How old were you on your last birthday?', questionType: 'dropdown'},
  {qID: 'Q0004', questionTemplate: 'Are you married to <Spouse>?', questionType: 'yesno'},
  {qID: 'Q0005', questionTemplate: 'Are you a director of <CompanyName>?', questionType: 'yesno'}
];

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
          <Route path="/kba" render={(props) => <Kba auth={auth} {...props}
            questions={QUESTIONS}/>} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
  );
}
