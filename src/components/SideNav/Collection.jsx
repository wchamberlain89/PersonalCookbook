import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Collection(props) {

  return (
    <Link to="/collections/viewAll" style={{ textDecoration: "none" }}>

      <li>
        <span>{props.name}</span>
      </li>

      <style jsx>
        {`
          li {
            position: relative;
            padding: "10px 0px 10px 30px";
            color: "black";
            transition: transform .1s;
          }

          li:hover {
            background-color: skyblue;
            transform-origin: left center;
            z-index: 10;
          }
      `}
      </style>

    </Link>
  );
}

Collection.propTypes = {
  name: PropTypes.string
};


export default Collection;
