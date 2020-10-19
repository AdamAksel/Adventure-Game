const expReducer = (state = 5, action) => {
  switch (action.type) {
    case 'INCREMENTEXP':
      return state + action.payload;
    case 'DECREMENTEXP':
      return state - action.payload;
    default:
      return state;
  }
};

export default expReducer;
