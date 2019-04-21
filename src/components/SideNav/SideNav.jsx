import React from 'react';
import CollectionsMain from './CollectionsListMain';
import SideNavHeader from './SideNavHeader';
function SideNav() {
  const styles = {
    width : '15vw',
    height : '100vh',
    border : '1px solid black',
    float : 'left',
    padding: '20px'
  };

  return (
    <nav style={styles}>
      <SideNavHeader/>
      <CollectionsMain/>
    </nav>
  );
}

export default SideNav;
