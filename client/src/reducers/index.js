import expReducer from './exp';
import { combineReducers } from 'redux';
import healthReducer from './health';
import strReducer from './str';
import dexReducer from './dex';
import intReducer from './int';
import maxHealthReducer from './maxHealth';
import armorPointsReducer from './armorPoints';
import itemCounterReducer from './itemCounter';
import worldNumberReducer from './worldNumber';
import rewardReducer from './reward';

const allReducers = combineReducers({
  armorP: armorPointsReducer,
  str: strReducer,
  dex: dexReducer,
  int: intReducer,
  exp: expReducer,
  health: healthReducer,
  maxHealth: maxHealthReducer,
  itemCount: itemCounterReducer,
  worldNumber: worldNumberReducer,
  reward: rewardReducer,
});

export default allReducers;
