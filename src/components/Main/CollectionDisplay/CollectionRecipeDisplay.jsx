import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';
import PropTypes from 'prop-types';

function CollectionRecipeDisplay(props) {
  const styles = {
    height : '100vh',
    maxWidth : '1300px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    padding: '0 20px',
    margin: '0 auto',
  };



  return (
    <div style={{width: '100%', overflow: 'scroll'}}>
      <div style={styles}>
        {props.recipes.map( (recipe, index) => <RecipeCard name={recipe.name} img={recipe.img} key={index}/> )}
      </div>
    </div>
  );
}

CollectionRecipeDisplay.propTypes = {
  recipes : PropTypes.array
}

export default CollectionRecipeDisplay;
