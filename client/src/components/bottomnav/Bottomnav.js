import React from 'react';
import Attributes from './Attributes';
import Items from './Items';

function Bottomnav() {
  return (
    <React.Fragment>
      <div className='bottomNav'>
        <Attributes />
        <Items />
      </div>
    </React.Fragment>
  );
}

export default Bottomnav;
