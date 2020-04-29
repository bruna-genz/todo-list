// eslint-disable-next-line import/prefer-default-export
export const listView = (list) => {
  const listHTML = `<div class="list" data-listID="${list.id}" data-listtitle="${list.title}">
        <div class="list-header">
            <h1>${list.title}</h1>
            <button class="delete-btn"><img src="../src/assets/images/bin.svg" alt="menu icon" class="nav-icon"></button>
        </div>
        <div class="items-container">

        </div>    
            <button class="add-item">
            <img src="../src/assets/images/plus.svg" alt=""> 
            <p>Add Item</p> 
            </button>
        </div>`;

  return listHTML;
};