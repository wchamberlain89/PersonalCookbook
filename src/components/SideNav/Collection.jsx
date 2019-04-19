import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Collection(props) {
  const styles = {

  };

  return (
    <Link to="/collections/viewAll" style={{textDecoration: "none"}}>
      <li>
        {props.name}
      </li>
    </Link>
  );
}

Collection.propTypes = {
  name: PropTypes.string
};


export default Collection;
