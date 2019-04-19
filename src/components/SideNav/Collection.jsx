import React from 'react';
import PropTypes from 'prop-types';

function Collection(props) {
  return (
    <li>{props.name}</li>
  );
}

Collection.propTypes = {
  name: PropTypes.string
};


export default Collection;
