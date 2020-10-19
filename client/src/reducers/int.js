const intReducer = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENTINT':
      return state + action.payload;
    case 'DECREMENTINT':
      return state - action.payload;
    default:
      return state;
  }
};

export default intReducer;
