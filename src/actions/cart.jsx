export const addToCart = (item) => {
  console.log('item:', item);
  return {
    type: 'add',
    item
  };
}
