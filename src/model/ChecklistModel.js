import uniqid from 'uniqid';

export let checklists = []

const persistData = () => {
    localStorage.setItem('checklists',JSON.stringify(checklists))
}

export const readStorage = () => {
    const storage = JSON.parse(localStorage.getItem('checklists'))
    if (storage) checklists = storage 
    return checklists
}

// checklist = [{id: 15654654, title: "checklist1 ", itemID = 61546, checkboxes = [] }, {id: 15654654, title: "checklist2 ", itemID = 61546, checkboxes = []}]

export const createChecklist = (id, title, itemID) => {
    const values = {
        id,
        title,
        itemID,
        checkboxes : []
    }
    checklists.push(values)

    persistData()
    return values;  
}



