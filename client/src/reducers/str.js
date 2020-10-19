const strReducer = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENTSTR':
      return state + action.payload;
    case 'DECREMENTSTR':
      return state - action.payload;
    default:
      return state;
  }
};

export default strReducer;
