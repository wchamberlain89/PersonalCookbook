import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';

function CollectionViewer() {
  const styles = {
    height : '100vh',
    width : '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    padding: '0 5%',
    margin: '0 auto'
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
