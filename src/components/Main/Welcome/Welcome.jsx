import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import backgroundImg from '../../../assets/imgs/welcomeBackground.jpg';

function Welcome () {
  const styles = {
    width: '100%',
    height: '100vh',
    paddingTop: '25vh',
    paddingLeft: '10vw',
    display: 'flex',
    flexDirection: 'column',

    backgroundImage: 'url(' + backgroundImg + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    position: 'relative'
  };

  const overlay = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',

    backgroundColor: 'rgba(0,0,0,0.3)',

  };
  return (
    <div style={styles}>
      <WelcomeMessage name='Ward'/>
      <div style={overlay}>
      </div>
    </div>

  );
}

export default Welcome;
