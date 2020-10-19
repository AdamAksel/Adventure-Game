import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rewardReducer } from '../../actions';

function EventboardEvent2(props) {
  const dispatch = useDispatch();
  const reward = useSelector((state) => state.reward);

  function funcClaimReward() {
    dispatch(props.reward);
    dispatch(rewardReducer(1));
  }
  return (
    <React.Fragment>
      <div className='eventBoard'>{props.img}</div>
      <div>
        <div className='eventText'>
          <h5 className='choosePath'>{props.description}</h5>

          <h5 className='choosePath'>{props.interactDescription}</h5>
        </div>
      </div>
      {reward === 0 ? (
        <div className='buttons'>
          <button className='continueButton' onClick={funcClaimReward}>
            Get Reward!
          </button>
        </div>
      ) : (
        <div className='buttons'>{props.combatButton2}</div>
      )}
    </React.Fragment>
  );
}

export default EventboardEvent2;
