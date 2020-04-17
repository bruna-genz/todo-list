import { optionsView } from "../views/listsViews/optionsView";
import { closeForm } from './projectsController.js';
import { insertPage } from "../routes/routesConfig";

const root = document.querySelector('.root')




// 1) Add event listener to Add Item button

const actionToInput = (input,event,item) => {
    input.addEventListener(event, ()=> {
        return item = input.value
        
    })
}

const insertItem = (name) => {
    `<div class="items">${name}</div>`
}
root.addEventListener('click', (e)=> {
    if (e.target.matches('.add-item, .add-item *')) {
        
        // Save list ID and name
        const parentList = e.target.closest('.list')
        const parentListName = e.target.closest('.list').dataset.listtitle
        
        // 2) Pop up item form
        root.insertAdjacentHTML("beforebegin", optionsView(parentListName))
        closeForm('#item-options, #item-options *')

        // 3) Get values from inputs
        let itemName
        const nameInput = document.querySelector('#list-name-input')
        actionToInput(nameInput,"keydown",itemName)
        
        let itemDescription
        const descriptionInput = document.querySelector('#description')
        actionToInput(descriptionInput,"keydown",itemDescription)

        let itemPriority
        const priorityInput = document.querySelector('#priority')
        actionToInput(priorityInput,"click",itemPriority)
        
        // 4) Create item object when click save button

        const saveBtn = document.querySelector('#save-btn')

        saveBtn.addEventListener('click', ()=> {
            parentList.insertAdjacentHTML('beforeend',insertPage())
            
        })
    }
})
