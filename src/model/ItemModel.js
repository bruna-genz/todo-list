import uniqid from 'uniqid';

export let items = []

export const persistData = () => {
    localStorage.setItem('items',JSON.stringify(items))
}

export const readStorage = () => {
    const storage = JSON.parse(localStorage.getItem('items'))
    if (storage) items = storage 
    return items
}


export const createItem = (title, listID, listName, description, date, priority) => {
    const values = {
        "id" : uniqid(),
        listID,
        listName,
        title,
        description,
        date,
        priority,
    }
    items.push(values)
    persistData()
    return values;  
}

export const deleteItemData = (itemID) => {
    items.forEach((item, i) => {
        if (item.id === itemID) {
            items.splice(i, 1)
            persistData()
        }
    })
}