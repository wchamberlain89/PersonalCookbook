import React from 'react';
import PropTypes from 'prop-types';
import brookie from '../../../../assets/imgs/img1.jpg';

function RecipeCardImg() {
  const styles = {
    overflow: 'hidden'
  };

  return (
    <div style={styles}>
      <img  src={brookie} style={{width:'100%'}}/>
    </div>
  );
}

RecipeCardImg.propTypes = {
  img: PropTypes.string
};


export default RecipeCardImg;
