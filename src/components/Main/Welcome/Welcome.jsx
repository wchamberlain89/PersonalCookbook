import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import backgroundImg from '../../../assets/imgs/welcomeBackground.jpg';

function Welcome () {
  const styles = {
    width: '100%',
    height: '100vw',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url(' + backgroundImg + ')'
  };
  return (
    <div style={styles}>
      <WelcomeMessage name='ward'/>
    </div>
  );
}

export default Welcome;
