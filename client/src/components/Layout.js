import React from 'react';
import { Container } from 'reactstrap';
import Eventboard from './eventboard/Eventboard';
import Bottomnav from './bottomnav/Bottomnav';

function Layout() {
  return (
    <Container>
      <div className='gameBoard'>
        <Eventboard />
        <Bottomnav />
      </div>
    </Container>
  );
}

export default Layout;
