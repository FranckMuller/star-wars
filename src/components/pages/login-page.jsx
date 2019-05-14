import React from 'react';

const LoginPage = ({ isLogged, onLoggedIn }) => {

  if(isLogged) {
    return (
      <div className="login-page">
        <h3 className="text-center">You are already logged in!!!</h3>
      </div>
    );
  };

  return (
    <div className="login-page">
      <h3>You need to login for see bonus</h3>
      <button onClick={onLoggedIn}>
        Log In
      </button>
    </div>
  );
};

export default LoginPage;
