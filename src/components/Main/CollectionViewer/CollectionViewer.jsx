import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';

function CollectionViewer() {
  const styles = {
    height : '100vh',
    width : '100%',
    display: 'flex',
    flexWrap: 'wrap'
  };



  return (
    <div style={styles}>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
    </div>
  );
}

export default CollectionViewer;
