import React from 'react';
import RecipeCardImg from './RecipeCardImg';
import RecipeCardFooter from './RecipeCardFooter';

function RecipeCard() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    maxWidth: '25%'
  };
  const innerStyles = {
    boxShadow: '0px 0px 1px 1px rgba(0,0,0,.15)'
  }

  return (
    <div style={styles}>
        <RecipeCardImg/>
        <RecipeCardFooter title='Praline Brownies'/>
    </div>
  );
}

export default RecipeCard;
