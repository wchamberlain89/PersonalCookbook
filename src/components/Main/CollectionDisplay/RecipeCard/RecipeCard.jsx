import React from 'react';
import RecipeCardImg from './RecipeCardImg';
import RecipeCardFooter from './RecipeCardFooter';
import PropTypes from 'prop-types';

function RecipeCard(props) {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '15px'
  };
  const innerStyles = {
    boxShadow: '0px 0px 1px 1px rgba(0,0,0,.15)'
  };

  return (
    <div style={styles}>
      <RecipeCardImg img={props.img}/>
      <RecipeCardFooter name={props.name}/>
    </div>
  );
}

RecipeCard.PropTypes = {
  name : PropTypes.string,
  img : PropTypes.string
};

export default RecipeCard;
