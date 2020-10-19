const armorPointsReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENTARMORPOINTS':
      return state + action.payload;
    case 'DECREMENTARMORPOINTS':
      return state - action.payload;
    default:
      return state;
  }
};

export default armorPointsReducer;
