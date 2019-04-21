import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';

function CollectionViewer() {
  const styles = {
    height : '100vh',
    maxWidth : '1300px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    padding: '0 20px',
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
