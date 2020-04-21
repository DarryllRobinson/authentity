import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../Auth/Auth';

function NavBar(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  const workflow = () => {
    props.history.replace('/workflow');
  }

  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Authentity
      </Link>
      {
        !auth0Client.isAuthenticated() &&
        <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
      }
      {
        auth0Client.isAuthenticated() &&
        <div>
          <label className="mr-2 text-white">{auth0Client.getProfile().nickname}</label>
          <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
          <button className="btn btn-dark" onClick={() => {workflow()}}>Process</button>
        </div>
      }
    </nav>
  );
}

export default withRouter(NavBar);
