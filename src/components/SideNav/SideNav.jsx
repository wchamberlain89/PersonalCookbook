import React from 'react';
import CollectionsMain from './CollectionsMain';

function SideNav() {
  const styles = {
    width : '15vw',
    height : '100vh',
    border : '1px solid black',
    float : 'left'
  };

  return (
    <nav style={styles}>
      <CollectionsMain/>
    </nav>
  );
}

export default SideNav;
