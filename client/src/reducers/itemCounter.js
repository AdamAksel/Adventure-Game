const itemCounterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENTITEMCOUNTER':
      return state + action.payload;
    default:
      return state;
  }
};

export default itemCounterReducer;
