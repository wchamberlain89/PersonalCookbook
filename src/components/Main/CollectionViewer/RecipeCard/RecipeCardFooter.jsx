import React from 'react';
import PropTypes from 'prop-types';

function RecipeCardFooter(props) {
  const styles = {
    padding: "5px 0px",
    textAlign: "center",
    fontSize: "1em"
  }
  const borderStyles = {
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    border: "2px solid #333",
    borderTop: 'none',
    
  }
  return (
    <div style={borderStyles}>
      <h4 style={styles}>{props.title}</h4>
    </div>
  );
}

RecipeCardFooter.propTypes = {
  title: PropTypes.string
};

export default RecipeCardFooter;
