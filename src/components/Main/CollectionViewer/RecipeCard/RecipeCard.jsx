import React from 'react';
import RecipeCardImg from './RecipeCardImg';
import RecipeCardFooter from './RecipeCardFooter';

function RecipeCard() {
  const styles = {
    width : '20%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    border: '1px solid black'
  };
  const innerStyles = {
    boxShadow: '0px 0px 1px 1px rgba(0,0,0,.15)'
  }

  return (
    <div style={styles}>
      <div>
        <RecipeCardImg/>
        <RecipeCardFooter title='Praline Brownies'/>
      </div>
    </div>
  );
}

export default RecipeCard;
