import React from 'react';

const LoginPage = ({ onLoggedIn }) => {
  return (
    <div>
      <h3>You need to login for see secret content</h3>
      <button
        className="btn btn-primary"
        onClick={onLoggedIn} >
        Log In
        </button>
    </div>
  );
};

export default LoginPage;
