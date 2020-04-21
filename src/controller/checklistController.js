import {createChecklist} from "../model/ChecklistModel"
import { checklistView } from "../views/checklistViews/checklistView";
import { insertPage } from "../routes/routesConfig";


const checklistState = {}

// TODO fix this function
export const renderChecklist = () => {
    const descriptionForm = document.querySelector('#description-form')
    
    
    addChecklist()
    console.log(checklistState.current)
    descriptionForm.insertAdjacentHTML("afterend",checklistView(checklistState.current))
}
const addChecklist = () => {
    const checklistTitle= document.querySelector('#checklist-title').value
    checklistState.current = createChecklist(checklistTitle,"234234234")
}

const addCheckbox = (checkbox, id) => {
    checklists.forEach(list => {
        if (list.id === id) {
            list.checkboxes.push(checkbox)
        }
    })
}

