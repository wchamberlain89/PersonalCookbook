import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';

function CollectionViewer() {
  const styles = {
    height : '100vh'
  };



  return (
    <div style={styles}>
      <RecipeCard/>
    </div>
  );
}

export default CollectionViewer;
