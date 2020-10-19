import React from 'react';

function EventboardEvent1(props) {
  return (
    <React.Fragment>
      <div className='eventBoard'>{props.img}</div>
      <div>
        <div className='eventText'>
          <h5 className='choosePath'>{props.description}</h5>
          <ul>
            <li className='choosePath'>{props.attack}</li>
            <li className='choosePath'>{props.interact}</li>
            <li className='choosePath'>{props.flee}</li>
          </ul>
          <h4 className='choosePath'>What do you do?</h4>
        </div>
      </div>

      {props.worldActionButtons}
    </React.Fragment>
  );
}

export default EventboardEvent1;
