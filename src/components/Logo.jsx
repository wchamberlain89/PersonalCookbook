import React from 'react';
import img from '../assets/imgs/delicious-digital.png';
import {Link} from 'react-router-dom';
function Logo() {
  return (
    <Link to="/">
      <img src={img} style={{width: '100%'}}/>
    </Link>
  );
}

export default Logo;
