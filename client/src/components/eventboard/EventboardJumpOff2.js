import React from 'react';

function EventboardJumpOff2(props) {
  return (
    <React.Fragment>
      <div className='eventBoard'>{props.worldImg}</div>
      <div>
        <div className='eventText'>
          <h5 className='choosePath'>{props.worldDescription}</h5>

          <ul>
            <li className='choosePath'>To your left {props.goLeftPeek}</li>
            <li className='choosePath'>
              On the path forward {props.goForwardPeek}
            </li>
            <li className='choosePath'>To your right {props.goRightPeek}</li>
          </ul>

          <h5 className='choosePath'>Where do you go?</h5>
        </div>
      </div>
      <div className='buttons'>
        {props.worldLeftButton},{props.worldForwardButton},
        {props.worldRightButton}
      </div>
    </React.Fragment>
  );
}

export default EventboardJumpOff2;
