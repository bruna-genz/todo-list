import listFormView from '../views/listsViews/listFormView';
import { listView } from '../views/listsViews/listView';
import { createList, readStorage, deleteList } from '../model/ListModel';
// eslint-disable-next-line import/no-cycle
import { renderItems } from './itemsController';

const listState = {};

// Action: Add lists to current dashboard
// eslint-disable-next-line import/prefer-default-export
export const renderLists = (projectId) => {
  listState.lists = readStorage();

  if (listState.lists) {
    listState.lists.forEach((list) => {
      if (list.projectID === projectId) {
        const addListBtn = document.querySelector('.add-list');
        addListBtn.insertAdjacentHTML('beforebegin', listView(list));
        renderItems(list.id);
      }
    });
  }

  // eslint-disable-next-line no-use-before-define
  setDeleteEvent();
};

// Action: delete lists
let listContainer;
const updateRenderLists = (projectId) => {
  listState.lists = readStorage();
  listContainer.innerHTML = '';
  listContainer.insertAdjacentHTML('afterbegin', '<button class="add-list"><img src="../src/assets/images/plus.svg" alt=""><p>Add list</p></button>');
  renderLists(projectId);
};

const getProjectID = (listId) => {
  let projectId;
  listState.lists.forEach((list) => {
    if (list.id === listId) {
      projectId = list.projectID;
    }
  });

  return projectId;
};

const setDeleteEvent = () => {
  listContainer = document.querySelector('#list-container');
  listContainer.addEventListener('click', (e) => {
    if (e.target.matches('.delete-btn, .delete-btn *')) {
      const listID = e.target.closest('.list').dataset.listid;
      const projectId = getProjectID(listID);
      deleteList(listID);
      updateRenderLists(projectId);
    }
  });
};

const popForm = (btn) => {
  btn.innerHTML = '';
  btn.classList.add('new-list-bg');
  btn.classList.remove('add-list');
  btn.insertAdjacentHTML('afterbegin', listFormView);
};

const closeForm = (closeBtn, reapearBtn) => {
  closeBtn.addEventListener('click', () => {
    reapearBtn.innerHTML = '';
    reapearBtn.classList.add('add-list');
    reapearBtn.classList.remove('new-list-bg');
    const btnContent = '<img src="../src/assets/images/plus.svg" alt=""><p>Add list</p>';
    reapearBtn.insertAdjacentHTML('afterbegin', btnContent);
  });
};

const addList = (submitBtn, reapearBtn) => {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const listInput = document.querySelector('#list-title');
    listState.title = listInput.value;

    if (listState.title) {
      const projectID = document.querySelector('#title').dataset.projectid;
      listState.currentList = createList(listState.title, projectID);

      reapearBtn.insertAdjacentHTML('beforebegin', listView(listState.currentList));
    } else {
      // eslint-disable-next-line no-alert
      alert('List must have a title');
    }
  });
};

const root = document.querySelector('.root');
root.addEventListener('click', (e) => {
  if (e.target.matches('.add-list, .add-list *')) {
    const addListBtn = document.querySelector('.add-list');
    popForm(addListBtn);

    const closeBtn = document.querySelector('#close-icon');
    closeForm(closeBtn, addListBtn);

    // retrieve data with submit button, add list and reapear addListBtn
    const submitBtn = document.querySelector('#new-list-btn');
    addList(submitBtn, addListBtn);
    closeForm(submitBtn, addListBtn);
  }
});