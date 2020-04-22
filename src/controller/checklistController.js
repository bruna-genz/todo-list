import {createChecklist, checklists} from "../model/ChecklistModel"
import { checklistView } from "../views/checklistViews/checklistView";
import { insertPage } from "../routes/routesConfig";
import uniqid from 'uniqid';

/* checklistState = [
    {title: aisjais, id : ?, checkbox : []}
    
]
*/

let checklistsArray = []
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
    const checkboxHtml = `<div><input type="checkbox" name="checklist-items"><label for="checklist-items">${label}</label></div>`
    const checklistForm = document.querySelectorAll(`[data-checklistid=${itemID}]`)[0]
    const checkboxContainer = checklistForm.querySelector(".checklist-items")

    checkboxContainer.insertAdjacentHTML("beforeend", checkboxHtml)
}

export const addCheckbox = (addbtn) => {
    if (addbtn.matches('#add-checkbox-btn, #add-checkbox-btn *')) {
        const checklistName = addbtn.previousElementSibling.previousElementSibling.value
        const itemID = addbtn.parentElement.dataset.checklistid
        createCheckbox(checklistName, itemID)
        renderCheckbox(checklistName, itemID)
    }
}

export const saveData = (itemID) => {
    
    if (checklistsArray !== []) {
        checklistsArray.forEach(checklist => {
            createChecklist(checklist.id, checklist.title, itemID, checklist.checkbox = null)
        })
    }

    checklistsArray = []
}


