import { optionsView } from "../views/listsViews/optionsView";
import { closeForm } from './projectsController.js';
import { insertPage } from "../routes/routesConfig";

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
        
        // Save list ID and name
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
        
        // 4) Create item object when click save button

        //! we need to figure out how to put the item in the correct place

        const saveBtn = document.querySelector('#save-btn')
        //const itemsContainer = e.target.previousElementSibling.previousElementSibling
        console.log(itemsContainer)

        saveBtn.addEventListener('click', ()=> {
            itemsContainer.insertAdjacentHTML('afterbegin', insertItem(itemState.name))
            
        })
    }
})
