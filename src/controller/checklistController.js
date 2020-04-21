import {createChecklist} from "../model/ChecklistModel"
import { checklistView } from "../views/checklistViews/checklistView";


// TODO fix this function
const addChecklist = () => {
    createChecklist(title, itemID)
}

const addCheckbox = (checkbox, id) => {
    checklists.forEach(list => {
        if (list.id === id) {
            list.checkboxes.push(checkbox)
        }
    })
}