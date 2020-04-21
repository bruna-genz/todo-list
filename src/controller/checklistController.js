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
    const checklistContainer = document.querySelector('.checklist-container')
    
    checklistState.title = document.querySelector('#checklist-title').value
    checklistState.id = uniqid()
    if (checklistState.title == "") {
        alert("Checklist must have a name")
    } else {
        checklistsArray.push(checklistState)
        checklistContainer.insertAdjacentHTML("beforeend", checklistView(checklistState))
    }    
}

const createCheckbox = (checkbox, id) => {
    checklistsArray.forEach(list => {
        if (list.id === id) {
            if (list.checkboxes) {
                list.checkboxes.push(checkbox)
            } else {
                list.checkboxes = [checkbox]
            }
            
        }
    })
}

const renderCheckbox = (label, itemID) => {
    const checkboxHtml = `<input type="checkbox" name="checklist-items"><label for="checklist-items">${label}</label><br>`
    const checklistForm = document.querySelectorAll(`[data-checklistid=${itemID}]`)[0]
    const checkboxContainer = checklistForm.querySelector(".checklist-items")

    checkboxContainer.insertAdjacentHTML("beforeend", checkboxHtml)
}

export const addCheckbox = (target) => {
    if (target.matches('#add-checkbox-btn, #add-checkbox-btn *')) {
        const checklistName = document.querySelector('#checklist-add-item').value
        const itemID = target.parentElement.dataset.checklistid
        createCheckbox(checklistName, itemID)
        renderCheckbox(checklistName, itemID)
    }
}

const saveData = () => {

    //TODO get itemID from the HTML data attribute
    if (checklistsArray !== []) {
        checklistsArray.forEach(checklist => {
            createChecklist(checklist.id, checklist.title, checklist.itemID, checklist.checkbox = null)
        })
    }
    
}


