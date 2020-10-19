const maxHealthReducer = (state = 100, action) => {
  switch (action.type) {
    case 'INCREMENTMAXHEALTH':
      return state + action.payload;
    case 'DECREMENTMAXHEALTH':
      return state - action.payload;
    default:
      return state;
  }
};

export default maxHealthReducer;
