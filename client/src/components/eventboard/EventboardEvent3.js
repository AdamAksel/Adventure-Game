import React from 'react';

function EventboardEvent3(props) {
  return (
    <React.Fragment>
      <div className='eventBoard'>{props.img}</div>
      <div>
        <div className='eventText'>
          <h5 className='choosePath'>{props.description}</h5>

          <h4 className='choosePath'>{props.fleeDescription}</h4>
        </div>
      </div>
      <div className='buttons'>{props.worldContinue}</div>
    </React.Fragment>
  );
}

export default EventboardEvent3;
