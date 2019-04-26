import React from 'react';
import Collection from './Collection';
import PropTypes from 'prop-types';

function CollectionsDisplay(props) {
  return (
    <ul>
      {
        props.collectionList.map((collection) =>
          <Collection
           name={collection.name}
           id={collection.id}
           key={collection.id}
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
