import React from 'react';
import { Redirect } from 'react-router-dom';

const BonusPage = ({ isLogged }) => {

  if(!isLogged) return <Redirect to="/login" />

  return (
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Tf9oYuUo86k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
};

export default BonusPage;