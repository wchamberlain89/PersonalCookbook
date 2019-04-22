import React from 'react';
import CollectionsMain from './CollectionsMain';
import Logo from '../Logo';
function SideNav() {
  const styles = {
    width : '20vw',
    minWidth: '150px',
    height : '100vh',
    float : 'left',
    padding: '20px',
    backgroundColor: '#63BF7A',
    boxShadow: '2px 1px 10px 2px rgba(0,0,0,.15)',
    flexGrow: '1'
  };

  return (
    <nav style={styles}>
      <Logo/>
      <CollectionsMain/>
    </nav>
  );
}

export default SideNav;
