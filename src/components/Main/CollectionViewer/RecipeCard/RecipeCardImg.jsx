import React from 'react';
import PropTypes from 'prop-types';
import brookie from '../../../../assets/imgs/img1.jpg';

function RecipeCardImg() {
  const styles = {
    width: '300px',
    height: '300px',
    overflow: 'hidden',
  };

  return (
    <div style={styles}>
      <img  src={brookie} style={{width:'100%', borderRadius: '10px'}}/>
    </div>
  );
}

RecipeCardImg.propTypes = {
  img: PropTypes.string
};


export default RecipeCardImg;
