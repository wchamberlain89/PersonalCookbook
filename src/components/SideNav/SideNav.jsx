import React from 'react';
import CollectionsMain from './CollectionsListMain';
import SideNavHeader from './SideNavHeader';
function SideNav() {
  const styles = {
    width : '15vw',
    height : '100vh',
    float : 'left',
    padding: '20px',
    backgroundColor: '#63BF7A'
  };

  return (
    <nav style={styles}>
      <SideNavHeader/>
      <CollectionsMain/>
    </nav>
  );
}

export default SideNav;
