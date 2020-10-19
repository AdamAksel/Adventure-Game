const dexReducer = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENTDEX':
      return state + action.payload;
    case 'DECREMENTDEX':
      return state - action.payload;
    default:
      return state;
  }
};

export default dexReducer;
