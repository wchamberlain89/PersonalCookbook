import React from 'react';
import NewCollectionControl from './NewCollectionControl';
import CollectionsDisplay from './CollectionsDisplay';
import CollectionsListHeader from './CollectionsListHeader';

function CollectionsMain() {
  const styles = {
    marginTop: '20px'
  };

  return (
    <section style={styles}>
      <CollectionsListHeader/>
      <NewCollectionControl/>
      <CollectionsDisplay/>
    </section>
  );
}

export default CollectionsMain;
