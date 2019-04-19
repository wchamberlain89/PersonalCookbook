import React from 'react';
import PropTypes from 'prop-types';
import brookie from '../../../../assets/imgs/img1.jpg';

function RecipeCardImg() {
  const styles = {
    width: '100%'
  };

  return (
    <div>
      <img style={styles} src={brookie}/>
    </div>
  );
}

RecipeCardImg.propTypes = {
  img: PropTypes.string
};


export default RecipeCardImg;
