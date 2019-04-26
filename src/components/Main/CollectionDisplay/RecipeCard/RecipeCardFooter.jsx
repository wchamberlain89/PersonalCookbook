import React from 'react';
import PropTypes from 'prop-types';

function RecipeCardFooter(props) {
  const styles = {
    padding: '10px 0px',
    textAlign: 'center',
    fontSize: '1.3em'
  };
  const borderStyles = {
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    border: '2px solid #333',
  };

  return (
    <div style={borderStyles}>
      <h4 style={styles}>{props.name}</h4>
    </div>
  );
}

RecipeCardFooter.propTypes = {
  name: PropTypes.string
};

export default RecipeCardFooter;
