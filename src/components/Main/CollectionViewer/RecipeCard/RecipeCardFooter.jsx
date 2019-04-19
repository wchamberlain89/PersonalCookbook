import React from 'react';
import PropTypes from 'prop-types';

function RecipeCardFooter(props) {
  return (
    <div>
      <h4>{props.title}</h4>
    </div>
  );
}

RecipeCardFooter.propTypes = {
  title: PropTypes.string
};

export default RecipeCardFooter;
