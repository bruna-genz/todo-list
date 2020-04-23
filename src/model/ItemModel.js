import uniqid from 'uniqid';

export const items = []

export const createItem = (title, listID, description, dueDate, priority) => {
    const values = {
        "id" : uniqid(),
        listID,
        title,
        description,
        dueDate,
        priority,
    }
    items.push(values)

    return values;  
}