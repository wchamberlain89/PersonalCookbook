import React from 'react';
import Collection from './Collection';
import PropTypes from 'prop-types';

function CollectionsDisplay(props) {
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
        props.collectionList.map((collection,index) =>
          <Collection
           name={collection.name}
           key={index}
          />
        )
      }
    </ul>
  );
}

CollectionsDisplay.proptypes = {
  collectionList : PropTypes.array
}

export default CollectionsDisplay;
