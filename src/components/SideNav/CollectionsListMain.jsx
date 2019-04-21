import React from 'react';
import CollectionsAdd from './CollectionsAdd';
import CollectionsList from './CollectionsList';
import CollectionsListHeader from './CollectionsListHeader';

function CollectionsMain() {
  const styles = {
    marginTop: '20px'
  };

  return (
    <section style={styles}>
      <CollectionsListHeader/>
      <CollectionsList/>
      <CollectionsAdd/>
    </section>
  );
}

export default CollectionsMain;
