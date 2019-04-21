import React from 'react';
import CollectionsAddButton from './CollectionsAddButton';
import CollectionsList from './CollectionsList';
import CollectionsListHeader from './CollectionsListHeader';

function CollectionsMain() {
  const styles = {
    marginTop: '20px'
  };

  return (
    <section style={styles}>
      <CollectionsListHeader/>
      <CollectionsAddButton/>
      <CollectionsList/>
    </section>
  );
}

export default CollectionsMain;
