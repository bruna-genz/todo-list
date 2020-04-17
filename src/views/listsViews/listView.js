export const listView = (list) => {
    const listHTML = `<div class="list">
        <h1 data-listID="list.id">${list.title}</h1>
        <div class="items-container">

        </div>    
            <button class="add-item">
            <img src="../src/assets/images/plus.svg" alt=""> 
            <p>Add Item</p> 
            </button>
        </div>`

    return listHTML
}