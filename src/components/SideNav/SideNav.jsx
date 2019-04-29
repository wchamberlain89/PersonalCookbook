import React from 'react';
import CollectionsMain from './CollectionsMain';
import Logo from '../Logo';
function SideNav() {
  const styles = {
    width: '15vw',
    minWidth: '200px',
    height : '100vh',
    float : 'left',
    padding: '20px',
    backgroundColor: '#63BF7A',
    boxShadow: '2px 0px 10px 2px rgba(0,0,0,.15)',
    flexGrow: '1',
    position: 'fixed',
    left: '0',
    top: '0',
    bottom: '0',
    zIndex: '5'
  };

  return (
    <nav style={styles}>
      <Logo/>
      <CollectionsMain/>
    </nav>
  );
}

export default SideNav;
