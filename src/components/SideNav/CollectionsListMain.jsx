import React from 'react';
import CollectionsAdd from './CollectionsAdd';
import CollectionsList from './CollectionsList';
import CollectionsListHeader from './CollectionsListHeader';

function CollectionsMain() {
  return (
    <section>
      <CollectionsAdd/>
      <CollectionsListHeader/>
      <CollectionsList/>
    </section>
  );
}

export default CollectionsMain;
