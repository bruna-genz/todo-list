import {createChecklist, readStorage } from "../model/ChecklistModel"
import { checklistView } from "../views/checklistViews/checklistView";
import uniqid from 'uniqid';

/* checklistState = [
    {title: aisjais, id : ?, checkbox : []}
    
]
*/

let checklistsArray = []
const checklistState = {} // Current checklist

export const renderChecklists  = (itemId) => {
    checklistState.checklists = readStorage()
    
    if ( checklistState.checklists) {
        
        checklistState.checklists.forEach((checklist) => {
            if (checklist.itemID == itemId) {     
                const checklistContainer = document.querySelector('.checklist-container')
                checklistContainer.insertAdjacentHTML("beforeend", checklistView(checklist.title, checklist.id))
                renderSavedCheckboxes(checklist, checklist.id)
            }
        })
    }
}

// TODO fix this function
export const addChecklist = () => {
    const checklistContainer = document.querySelector('.checklist-container')
    

    //! Each time we change properties of checklistState, we modify the items that are already on the array
    const title = document.querySelector('#checklist-title').value
    const id = uniqid()
    if (checklistState.title == "") {
        alert("Checklist must have a name")
    } else {
        console.log(checklistsArray)
        checklistsArray.push({title, id})
        checklistContainer.insertAdjacentHTML("beforeend", checklistView(title, id))
    }    
}

const renderSavedCheckboxes = (checklist, checklistId) => {
    checklist.checkboxes.forEach((checkbox) => {
        renderCheckbox(checkbox, checklistId)
    })
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

const renderCheckbox = (label, checklistId) => {
    const checkboxHtml = `<div><input type="checkbox" name="checklist-items"><label for="checklist-items">${label}</label></div>`
    const checklistForm = document.querySelectorAll(`[data-checklistid=${checklistId}]`)[0]
    const checkboxContainer = checklistForm.querySelector(".checklist-items")

    checkboxContainer.insertAdjacentHTML("beforeend", checkboxHtml)
}

export const addCheckbox = (addbtn) => {
    if (addbtn.matches('#add-checkbox-btn, #add-checkbox-btn *')) {
        const checklistName = addbtn.previousElementSibling.previousElementSibling.value
        const checklistId = addbtn.parentElement.dataset.checklistid
        createCheckbox(checklistName, checklistId)
        renderCheckbox(checklistName, checklistId)
    }
}

export const saveData = (checklistId) => {
    if (checklistsArray !== []) {
        checklistsArray.forEach(checklist => {
            createChecklist(checklist.id, checklist.title, checklistId, checklist.checkboxes)
        })
    }

    //checklistsArray = []

    
}


