import { optionsView } from "../views/listsViews/optionsView";
import { closeForm } from './projectsController.js';
import { createItem, readStorage } from "../model/ItemModel";
import { renderChecklist, addCheckbox, saveData } from "./checklistController";
import { format } from 'date-fns'

const itemState = {}

export const renderItems = (listId) => {
    itemState.items = readStorage()
    
    if (itemState.items) {
        
        itemState.items.forEach((item) => {
           
            if (item.listID == listId) {
                
                const listBoard = document.querySelectorAll(`[data-listid='${listId}']`)[0]
                const itemContainer = listBoard.querySelector('.items-container')
                itemContainer.insertAdjacentHTML('afterbegin', insertItem(item))
                //renderItems(listId)
            }
        })
    }
}

/*const isValidDate = (d) => {
    return d instanceof Date && !isNaN(d);
}*/

const root = document.querySelector('.root')

// 1) Add event listener to Add Item button

const actionToInput = (input,event,item) => {
    input.addEventListener(event, ()=> {
        itemState[item] = input.value
        
    })
}

const insertItem = (item) => {
    let splitDate
    let date

    if (item.date) {
        splitDate = item.date.split("-")
        date = format(new Date(splitDate[0], splitDate[1], splitDate[2]), 'dd MMM yyyy')
    } else {  
        date = ""
    }
    
    
    const dueDate = `<button class="due-date"><img src="../src/assets/images/clock.svg" alt="">${date}</button>`

    return `<div class="items" data-itemid="${item.id}">
                <button class="priority ${item.priority}"></button>
                <p>${item.title}</p>
                ${ date == "" ? "" : dueDate }
            </div>`
}
root.addEventListener('click', (e)=> {
    if (e.target.matches('.add-item, .add-item *')) {
        
        // Save parent list ID and name
        const parentList = e.target.closest('.list');
        const parentListID = e.target.closest('.list').dataset.listid
        const parentListName = e.target.closest('.list').dataset.listtitle
        
        // 2) Pop up item form
        root.insertAdjacentHTML("beforebegin", optionsView(parentListName))
        closeForm('#item-options, #item-options *')

        // 3) Get values from inputs
        //let itemName
        const nameInput = document.querySelector('#list-name-input')
        itemState.title = actionToInput(nameInput,"keydown", "title")
        
        //let itemDescription
        const descriptionInput = document.querySelector('#description')
        itemState.description = actionToInput(descriptionInput,"keydown","description")

        //let itemPriority
        const priorityInput = document.querySelector('#priority')
        itemState.priority = actionToInput(priorityInput,"click","priority")
        
        const dateInput = document.querySelector('.date')
        itemState.date = new Date(actionToInput(dateInput,"change","date"))
        
        // 4) Create item object when click save button and render on page
        const saveBtn = document.querySelector('#save-item-btn')
        const itemsContainer = parentList.querySelector('.items-container')

        // TODO Organize checklist 

        // Display checklist title form
        const checklistBtn = document.querySelector("#checklist-btn")
        const checklistTitleForm = document.querySelector("#checklist-title-form")
        checklistBtn.addEventListener("click", () => {
            checklistTitleForm.classList.toggle("hidden")
        })

        // Hide checklist title form
        const checklistCloseButton = document.querySelector("#checklist-close")
        checklistCloseButton.addEventListener("click", () => {
            checklistTitleForm.classList.toggle("hidden")
        })

        // TODO add event listeners to add checklist btn    

        const submitChecklistbtn = document.querySelector('#checklist-button')
        submitChecklistbtn.addEventListener('click',(e)=>{
            e.preventDefault()
            checklistTitleForm.classList.toggle("hidden")
            
            renderChecklist()
        })

        const checklistContainer = document.querySelector('.checklist-container')
        
        checklistContainer.addEventListener('click',(e) => {
            e.preventDefault()
            addCheckbox(e.target)   
           
        })
        
        const itemsForm = document.querySelector(".dark-background")
        saveBtn.addEventListener('click', ()=> {

            if (itemState.title) {
                const itemInfo = createItem(itemState.title, parentListID, itemState.description, itemState.date, itemState.priority)
                itemState.id = itemInfo.id
                itemsContainer.insertAdjacentHTML('afterbegin', insertItem(itemState))
                saveData(itemState.id)
                itemsForm.parentNode.removeChild(itemsForm)
            } else {
                alert("Item must have a title")
            }
        })
    }
})
