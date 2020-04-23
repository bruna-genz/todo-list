import uniqid from 'uniqid';

export let items = []

const persistData = () => {
    localStorage.setItem('items',JSON.stringify(items))
}

export const readStorage = () => {
    const storage = JSON.parse(localStorage.getItem('items'))
    if (storage) items = storage 
    return items
}


export const createItem = (title, listID, description, date, priority) => {
    const values = {
        "id" : uniqid(),
        listID,
        title,
        description,
        date,
        priority,
    }
    items.push(values)
    persistData()
    return values;  
}