import { optionsView } from "../views/listsViews/optionsView";
import { closeForm } from './projectsController.js';

const root = document.querySelector('.root')

// 1) Add event listener to Add Item button
root.addEventListener('click', (e)=> {
    if (e.target.matches('.add-item, .add-item *')) {
        
        // Save list ID and name
        const parentListId = e.target.closest('.list').dataset.listid
        const parentListName = e.target.closest('.list').dataset.listtitle
        console.log(parentListName)
        
        // 2) Pop up item form
        root.insertAdjacentHTML("beforebegin", optionsView(parentListName))
        closeForm('#item-options, #item-options *')

        let itemName
        let itemDescription

        const nameInput = document.querySelector('#list-name-input')
        nameInput.addEventListener("keydown", () => {
            itemName = nameInput.value            
        })

        const descriptionInput = document.querySelector('#description')
        descriptionInput.addEventListener("keydown", () => {
            itemDescription = descriptionInput.value      
            console.log(itemName, itemDescription)      
        })
        
        // 3) Get other inputs

        // 4) Create item object when click save button

    }
})
