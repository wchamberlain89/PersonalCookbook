import React from 'react';
import PropTypes from 'prop-types';


function RecipeCardImg(props) {
  const styles = {
    overflow: 'hidden'
  };

  return (
    <div style={styles}>
      <img  src={require(`../../../../assets/imgs/${props.img}`)} style={{width:'100%'}}/>
    </div>
  );
}

RecipeCardImg.propTypes = {
  img: PropTypes.string
};


export default RecipeCardImg;
