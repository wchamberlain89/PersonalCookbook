import React from 'react';
import PropTypes from 'prop-types';

function RecipeCardImg(props) {
  const styles = {
    width: '100%'
  };

  return (
    <div>
      <img style={styles} src={require(`../../../../assets/imgs/${props.img}`)}/>
    </div>
  );
}

RecipeCardImg.propTypes = {
  img: PropTypes.string
};


export default RecipeCardImg;
