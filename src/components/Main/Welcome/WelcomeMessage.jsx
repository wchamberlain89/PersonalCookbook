import React from 'react';
import PropTypes from 'prop-types';

function WelcomeMessage(props) {
  const styles = {
    fontSize: '4em',
    fontWeight: '400',
    color: '#FFF',
    zIndex: '10',
    border: '5px solid white',
    width: '100%',
    maxWidth: '30%',
    minWidth: '200px',
    padding: '20px'
  };

  return (
    <h1 style={styles}>
      Welcome {props.name}
    </h1>
  );
}

WelcomeMessage.propTypes = {
  name: PropTypes.string
};

export default WelcomeMessage;
