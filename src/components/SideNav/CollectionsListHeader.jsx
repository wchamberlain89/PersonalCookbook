import React from 'react';

function CollectionListHeader() {
  const styles = {
    padding: '15px 0px',
    textAlign: 'center',
    fontSize: '1.75em',
    fontWeight: '400',
    color: '#DDD'
  };

  return (
    <h3 style={styles}>Your Recipe Collections</h3>
  );
}

export default CollectionListHeader;
