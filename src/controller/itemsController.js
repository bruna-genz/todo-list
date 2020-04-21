import { optionsView } from "../views/listsViews/optionsView";
import { closeForm } from './projectsController.js';
import { insertPage } from "../routes/routesConfig";
import { createItem } from "../model/ItemModel";

const itemState = {}

const root = document.querySelector('.root')

// 1) Add event listener to Add Item button

const actionToInput = (input,event,item) => {
    input.addEventListener(event, ()=> {
        itemState[item] = input.value
    })
}

const insertItem = (name) => {
    return `<div class="items">${name}</div>`
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
        itemState.name = actionToInput(nameInput,"keydown", "name")
        
        //let itemDescription
        const descriptionInput = document.querySelector('#description')
        itemState.description = actionToInput(descriptionInput,"keydown","description")

        //let itemPriority
        const priorityInput = document.querySelector('#priority')
        itemState.priority = actionToInput(priorityInput,"click","priority")
        
        const dateInput = document.querySelector('.date')
        itemState.date = new Date(actionToInput(dateInput,"change","date"))
        
        // 4) Create item object when click save button and render on page
        const saveBtn = document.querySelector('#save-btn')
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
            
            
            //Todo Pick up info from input
            
            //add Input value to checklist div
            //Appear div for chelist

            const checklistContainer = document.querySelector('#checklist-form')
            checklistContainer.classList.toggle("hidden")


        })
        console.log(submitChecklistbtn)



        const itemsForm = document.querySelector(".dark-background")
        saveBtn.addEventListener('click', ()=> {

            if (itemState.name) {
                itemsContainer.insertAdjacentHTML('afterbegin', insertItem(itemState.name))
                //createItem(itemState.name, parentListID, itemState.description, dueDate, itemState.priority, checklist)
                console.log(itemState)
                itemsForm.parentNode.removeChild(itemsForm)
            } else {
                alert("Item must have a title")
            }
        })
    }
})
