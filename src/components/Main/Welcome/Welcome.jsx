import React from 'react';
import WelcomeMessage from './WelcomeMessage';
function Welcome () {
  const styles = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }
  return (
    <div style={styles}>
      <WelcomeMessage name='ward'/>
    </div>
  );
}

export default Welcome;
