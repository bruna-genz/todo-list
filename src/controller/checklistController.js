import {createChecklist} from "../model/ChecklistModel"
import { checklistView } from "../views/checklistViews/checklistView";
import { insertPage } from "../routes/routesConfig";
import uniqid from 'uniqid';

/* checklistState = [
    {title: aisjais, id : ?, checkbox : []}
    
]
*/

const checklistsArray = []
const checklistState = {} // Current checklist

// TODO fix this function
export const renderChecklist = () => {
    const descriptionForm = document.querySelector('#description-form')
    
    checklistState.title = document.querySelector('#checklist-title').value
    checklistState.id = uniqid()
    if (checklistState.title == "") {
        alert("Checklist must have a name")
    } else {
        checklistsArray.push(checklistState)
        descriptionForm.insertAdjacentHTML("afterend", checklistView(checklistState))
    }    
}

const addCheckbox = (checkbox, id) => {
    checklists.forEach(list => {
        if (list.id === id) {
            list.checkboxes.push(checkbox)
        }
    })
}

const saveData = () => {

    //TODO get itemID from the HTML data attribute
    if (checklistsArray !== []) {
        checklistsArray.forEach(checklist => {
            createChecklist(checklist.id, checklist.title, checklist.itemID, checklist.checkbox = null)
        })
    }
    
}
