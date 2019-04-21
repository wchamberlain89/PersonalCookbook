import React from 'react';
import NewCollectionControl from './NewCollectionControl';
import CollectionsList from './CollectionsList';
import CollectionsListHeader from './CollectionsListHeader';

function CollectionsMain() {
  const styles = {
    marginTop: '20px'
  };

  return (
    <section style={styles}>
      <CollectionsListHeader/>
      <NewCollectionControl/>
      <CollectionsList/>
    </section>
  );
}

export default CollectionsMain;
