const rewardReducer = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENTREWARD':
      return state + action.payload;
    default:
      return state;
  }
};

export default rewardReducer;
