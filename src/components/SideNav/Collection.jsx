import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Collection(props) {

  return (
    <Link to={`/collection/${props.id}`} style={{ textDecoration: 'none' }}>

      <li>
        <span>{props.name}</span>
      </li>

      <style jsx>
        {`
          li {
            position: relative;
            padding: 10px 0px 10px 10px;
            color: #ddd;
            transition: .1s;
            list-style-type: none;

          }

          li:hover {
            border-left: 3px solid #ed1d25;
            padding-left: 20px;
          }
      `}
      </style>

    </Link>
  );
}

Collection.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string
};


export default Collection;
