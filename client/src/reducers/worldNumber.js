const worldNumberReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENTWORLDNUMBER':
      return state + action.payload;
    default:
      return state;
  }
};

export default worldNumberReducer;
