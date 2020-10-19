import React from 'react';

function EventboardJumpOff1(props) {
  return (
    <React.Fragment>
      <div className='eventBoard'>{props.worldImg}</div>
      <div>
        <div className='eventText'>
          <h5 className='choosePath'>{props.worldDescription}</h5>
        </div>
      </div>
      <div className='buttons'>{props.worldContinue}</div>
    </React.Fragment>
  );
}

export default EventboardJumpOff1;
