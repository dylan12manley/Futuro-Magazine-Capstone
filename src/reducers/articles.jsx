export default(state = [], payload) => {
  let newState;
  const { title,
          author,
          publishDate,
          articleBody,
          mainImage,
          otherImage,
          catagory,
          id } = action;
  switch(payload.type) {
    case 'ADD_ARTICLE':
      return [...state, payload.item];
      default:
      return state;
  }
}
