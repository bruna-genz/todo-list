// eslint-disable-next-line import/no-mutable-exports
export let checklists = [];

const persistData = () => {
  localStorage.setItem('checklists', JSON.stringify(checklists));
};

export const readStorage = () => {
  const storage = JSON.parse(localStorage.getItem('checklists'));
  if (storage) checklists = storage;
  return checklists;
};

export const createChecklist = (id, title, itemID, checkboxes = null) => {
  const values = {
    id,
    title,
    itemID,
    checkboxes,
  };
  checklists.push(values);

  persistData();
  return values;
};

export const deleteChecklist = (checklistId) => {
  checklists.forEach((checklist, i) => {
    if (checklist.id === checklistId) {
      checklists.splice(i, 1);
      persistData();
    }
  });
};
