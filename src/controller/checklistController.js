import uniqid from 'uniqid';
import { createChecklist, readStorage, deleteChecklist } from '../model/ChecklistModel';
import { checklistView } from '../views/checklistViews/checklistView';

let checklistsArray = [];
const checklistState = {}; // Current checklist

const renderCheckbox = (label, checklistId) => {
  const checkboxHtml = `<div><input type="checkbox" name="checklist-items"><label for="checklist-items">${label}</label></div>`;
  const checklistForm = document.querySelectorAll(`[data-checklistid=${checklistId}]`)[0];
  const checkboxContainer = checklistForm.querySelector('.checklist-items');

  checkboxContainer.insertAdjacentHTML('beforeend', checkboxHtml);
};

const renderSavedCheckboxes = (checklist, checklistId) => {
  checklist.checkboxes.forEach((checkbox) => {
    renderCheckbox(checkbox, checklistId);
  });
};

export const renderChecklists = (itemId) => {
  checklistState.checklists = readStorage();

  if (checklistState.checklists) {
    checklistState.checklists.forEach((checklist) => {
      if (checklist.itemID === itemId) {
        const checklistContainer = document.querySelector('.checklist-container');
        checklistContainer.insertAdjacentHTML('beforeend', checklistView(checklist.title, checklist.id));
        renderSavedCheckboxes(checklist, checklist.id);
      }
    });
  }
};

// Action: delete
const updateRenderChecklists = (checklistId, itemId) => {
  const checklistForm = document.querySelector(`[data-checklistid=${checklistId}]`);
  checklistForm.innerHTML = '';
  if (itemId) renderChecklists(itemId);
};

export const setDeleteEvent = () => {
  const checklistContainer = document.querySelector('.checklist-container');
  const itemId = checklistContainer.dataset.itemid;
  checklistContainer.addEventListener('click', (e) => {
    if (e.target.matches('#checklist-image, #checklist-image *')) {
      const checklistId = e.target.closest('#checklist-form').dataset.checklistid;
      deleteChecklist(checklistId);
      updateRenderChecklists(checklistId, itemId);
    }
  });
};

export const addChecklist = () => {
  const checklistContainer = document.querySelector('.checklist-container');

  const title = document.querySelector('#checklist-title').value;
  const id = uniqid();
  if (checklistState.title === '') {
    // eslint-disable-next-line no-alert
    alert('Checklist must have a name');
  } else {
    checklistsArray.push({ title, id });
    checklistContainer.insertAdjacentHTML('beforeend', checklistView(title, id));
  }

  setDeleteEvent();
};

const createCheckbox = (checkbox, id) => {
  checklistsArray.forEach(list => {
    if (list.id === id) {
      if (list.checkboxes) {
        list.checkboxes.push(checkbox);
      } else {
        list.checkboxes = [checkbox];
      }
    }
  });
};

export const addCheckbox = (addbtn) => {
  if (addbtn.matches('#add-checkbox-btn, #add-checkbox-btn *')) {
    const checklistName = addbtn.previousElementSibling.previousElementSibling.value;
    const checklistId = addbtn.parentElement.dataset.checklistid;
    createCheckbox(checklistName, checklistId);
    renderCheckbox(checklistName, checklistId);
  }
};

export const saveData = (checklistId) => {
  if (checklistsArray !== []) {
    checklistsArray.forEach(checklist => {
      createChecklist(checklist.id, checklist.title, checklistId, checklist.checkboxes);
    });
  }

  checklistsArray = [];
};