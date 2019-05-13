import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLogged, onLoggedIn }) => {

  if(isLogged) return <Redirect to="/bonus" />

  return (
    <div>
      <h3>You need to login for see bonus</h3>
      <button
        className="btn btn-primary"
        onClick={onLoggedIn} >
        Log In
        </button>
    </div>
  );
};

export default LoginPage;
