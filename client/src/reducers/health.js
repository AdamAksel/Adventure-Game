const healthReducer = (state = 100, action) => {
  switch (action.type) {
    case 'INCREMENTHEALTH':
      return state + action.payload;
    case 'DECREMENTHEALTH':
      return state - action.payload;
    default:
      return state;
  }
};

export default healthReducer;
