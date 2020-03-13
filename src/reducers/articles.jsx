export default(state = [], payload) => {
  let newState;
  switch(payload.type) {
    case 'ADD_ARTICLE':
      return [...state, payload.item];
      default:
      return state;
  }
}
