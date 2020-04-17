import uniqid from 'uniqid';

export const items = []

export const createItem = (title, listID, description, dueDate, priority, checkbox = nil) => {
    const values = {
        "id" : uniqid(),
        listID,
        title,
        description,
        dueDate,
        priority,
        checkbox
    }
    items.push(values)

    return values;  
}