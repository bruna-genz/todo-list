import uniqid from 'uniqid';

export const checklists = []

// checklist = [{id: 15654654, title: "checklist1 ", itemID = 61546, checkboxes = [] }, {id: 15654654, title: "checklist2 ", itemID = 61546, checkboxes = []}]

export const createChecklist = (title, itemID) => {
    const values = {
        "id" : uniqid(),
        title,
        itemID,
        checkboxes = []
    }
    checklists.push(values)

    return values;  
}



