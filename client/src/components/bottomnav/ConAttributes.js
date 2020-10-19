import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementStr,
  incrementDex,
  incrementInt,
  decrementExp,
  incrementHealth,
  incrementMaxHealth,
} from '../../actions';

function ConAttributes() {
  // incrementStr,
  // decrementStr,
  // incrementDex,
  // decrementDex,
  // incrementInt,
  // decrementInt,
  // incrementExp,
  // decrementExp,
  // incrementHealth,
  // decrementHealth,

  const str = useSelector((state) => state.str);
  const dex = useSelector((state) => state.dex);
  const int = useSelector((state) => state.int);
  const exp = useSelector((state) => state.exp);
  const health = useSelector((state) => state.health);
  const maxHealth = useSelector((state) => state.maxHealth);
  const dispatch = useDispatch();

  function incStr() {
    if (exp > 0) {
      dispatch(incrementStr(1));
      dispatch(incrementHealth(5));
      dispatch(incrementMaxHealth(5));
      dispatch(decrementExp(1));
    }
  }
  function incDex() {
    if (exp > 0) {
      dispatch(incrementDex(1));
      dispatch(incrementHealth(2));
      dispatch(incrementMaxHealth(2));
      dispatch(decrementExp(1));
    }
  }
  function incInt() {
    if (exp > 0) {
      dispatch(incrementInt(1));
      dispatch(incrementHealth(2));
      dispatch(incrementMaxHealth(2));
      dispatch(decrementExp(1));
    }
  }
  if (exp > 0) {
    return (
      <React.Fragment>
        <div className='exp'>Exp {exp}</div>
        <div className='attributes'>
          <ul>
            <li className='str'>
              Str {str}{' '}
              <button className='strButton' onClick={incStr}>
                +
              </button>
            </li>
            <li className='dex'>
              Dex {dex}{' '}
              <button className='dexButton' onClick={incDex}>
                +
              </button>
            </li>
            <li className='int'>
              Int {int}{' '}
              <button className='intButton' onClick={incInt}>
                +
              </button>
            </li>
          </ul>
        </div>
        <div className='health'>
          <i className='fa fa-heart'></i> {health}/{maxHealth}
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className='exp'>Exp {exp}</div>
        <div className='attributes'>
          <ul>
            <li className='str'>Str {str} </li>
            <li className='dex'>Dex {dex} </li>
            <li className='int'>Int {int} </li>
          </ul>
        </div>
        <div className='health'>
          <i className='fa fa-heart'></i> {health}/{maxHealth}
        </div>
      </React.Fragment>
    );
  }
}

export default ConAttributes;
