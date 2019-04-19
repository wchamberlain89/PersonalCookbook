import React from 'react';
import PropTypes from 'prop-types';

function WelcomeMessage(props) {
  return (
    <h1>Welcome {props.name}</h1>
  );
}

WelcomeMessage.propTypes = {
  name: PropTypes.string
};

export default WelcomeMessage;
