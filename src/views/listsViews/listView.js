export const listView = (list) => {
    const listHTML = `<div class="list" data-listID="${list.id}" data-listtitle="${list.title}">
        <h1>${list.title}</h1>
        <div class="items-container">

        </div>    
            <button class="add-item">
            <img src="../src/assets/images/plus.svg" alt=""> 
            <p>Add Item</p> 
            </button>
        </div>`

    return listHTML
}