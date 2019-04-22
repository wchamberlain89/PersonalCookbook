import React from 'react';
import Collection from './Collection';

function CollectionsDisplay() {
  const collections = [
    {
      name: 'All Recipes'
    },
    {
      name: 'Side Dishes'
    },
    {
      name: 'Chicken Dinners'
    }
  ];

  return (
    <ul>
      {
        collections.map((collection) =>
          <Collection name={collection.name}/>
        )
    }
    </ul>
  );
}

export default CollectionsDisplay;
