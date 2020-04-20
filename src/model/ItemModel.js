import uniqid from 'uniqid';

export const items = []

export const createItem = (title, listID, description, dueDate, priority, checklist) => {
    const values = {
        "id" : uniqid(),
        listID,
        title,
        description,
        dueDate,
        priority,
        checklist
    }
    items.push(values)

    return values;  
}