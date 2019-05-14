import React from 'react';
import { Redirect } from 'react-router-dom';

const BonusPage = ({ isLogged }) => {

  if(!isLogged) return <Redirect to="/login" />

  return (
    <div className="bonus-page">
      <h2 className="text-center">Congratulations!!! You can see my video as bonus :)</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Tf9oYuUo86k" title="Darkness Rises" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
};

export default BonusPage;