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

const addCheckbox = (checkbox, id) => {
    checklists.forEach(list => {
        if (list.id === id) {
            list.checkboxes.push(checkbox)
        }
    })
}


const checklistContainer = document.querySelector('.checklist-container')
//const addCheckboxBtn = document.querySelector('#add-checkbox-btn')
checklistContainer.addEventListener('click',(e) => {
    e.preventDefault()
    if (e.target.matches('#add-checkbox-btn, #add-checkbox-btn *')) {
        const checklistAddItem = document.querySelector('#checklist-add-item')
    
        console.log(e.target)
        addCheckbox()
    }
    
    
})




const saveData = () => {

    //TODO get itemID from the HTML data attribute
    if (checklistsArray !== []) {
        checklistsArray.forEach(checklist => {
            createChecklist(checklist.id, checklist.title, checklist.itemID, checklist.checkbox = null)
        })
    }
    
}


