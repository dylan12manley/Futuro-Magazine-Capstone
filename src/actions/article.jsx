export const addToArticles = (item) => {
  console.log('item:', item);
  return {
    type: 'add',
    item
  };
}
