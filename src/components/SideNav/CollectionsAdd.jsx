import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../assets/imgs/add.svg';

function CollectionsAdd() {
  const styles = {
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <Link to="/" style={{textDecoration: 'none'}}>
      <div style={styles}>
        <span style={{ marginRight: '15px', fontSize: '1.3em'}}>New Collection</span>
        <img src={img} style={{width:'25px'}}/>
      </div>
    </Link>
  );
}


export default CollectionsAdd;
