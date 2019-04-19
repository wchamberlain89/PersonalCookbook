import React from 'react';
import RecipeCardImg from './RecipeCardImg';
import RecipeCardFooter from './RecipeCardFooter';

function RecipeCard() {
  const styles = {
    height : '200px',
    width : '200px'
  };

  return (
    <div style={styles}>
      <RecipeCardImg/>
      <RecipeCardFooter title='Praline Brownies'/>
    </div>
  );
}

export default RecipeCard;
