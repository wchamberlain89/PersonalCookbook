import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';
import PropTypes from 'prop-types';
import AddRecipeButton from './AddRecipeControl/AddRecipeButton';
function CollectionRecipeDisplay(props) {
  const styles = {
    position: 'relative',
    height : '99vh',
    maxWidth : '1300px',

    padding: '0 20px',
    margin: '0 auto 0 20vw',


    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',

  };



  return (
    <div classname="scrollHide" style={{width: '100%', position: 'relative'}}>
      <style jsx>
        {`
          .scrollHide::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
          .scrollHide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <div style={styles}>
        {props.recipes.map( (recipe, index) => <RecipeCard name={recipe.name} img={recipe.img} key={index}/> )}
      </div>
      <AddRecipeButton onAddingRecipe={props.onAddingRecipe}/>
    </div>
  );
}

CollectionRecipeDisplay.propTypes = {
  recipes : PropTypes.array,
  onAddingRecipe : PropTypes.func
}

export default CollectionRecipeDisplay;
