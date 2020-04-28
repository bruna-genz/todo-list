import uniqid from 'uniqid';

// eslint-disable-next-line import/no-mutable-exports
export let lists = [];

const persistData = () => {
  localStorage.setItem('lists', JSON.stringify(lists));
};

export const readStorage = () => {
  const storage = JSON.parse(localStorage.getItem('lists'));
  if (storage) lists = storage;
  return lists;
};

export const createList = (title, projectID) => {
  const values = {
    id: uniqid(),
    projectID,
    title,
  };
  lists.push(values);
  persistData();
  return values;
};

export const deleteList = (listID) => {
  lists.forEach((list, i) => {
    if (list.id === listID) {
      lists.splice(i, 1);
      persistData();
    }
  });
};
