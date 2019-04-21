import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import backgroundImg from '../../../assets/imgs/welcomeBackground.jpg';

function Welcome () {
  const styles = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url(' + backgroundImg + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
    opacity: '0.6'
  };
  return (
    <div style={{backgroundColor:"black", width: '100%'}}>
      <div style={styles}>
        <WelcomeMessage name='ward'/>
      </div>
    </div>

  );
}

export default Welcome;
