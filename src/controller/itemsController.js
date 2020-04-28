import { insertItemView } from "../views/itemsView/itemView"
import { optionsView} from "../views/listsViews/optionsView";
import { editOptionsView } from "../views/listsViews/editOptionsView";
import { setCloseFormEvent } from './projectsController.js';
import { createItem, readStorage, deleteItemData, persistData } from "../model/ItemModel";
import { addChecklist, addCheckbox, saveData, renderChecklists } from "./checklistController";

const itemState = {}

let nameInput
let descriptionInput
let priorityInput
let dateInput

const closeForm = () => {
    const darkBackground = document.querySelector(".dark-background")
    darkBackground.parentNode.removeChild(darkBackground)
}

const selectInputs = () => {
    nameInput = document.querySelector('#list-name-input')
    descriptionInput = document.querySelector('#description')
    priorityInput = document.querySelector('#priority')
    dateInput = document.querySelector('.date')
}

export const renderItems = (listId) => {
    itemState.items = readStorage()
    
    if (itemState.items) {
        itemState.items.forEach((item) => {
            if (item.listID == listId) {
                
                const listBoard = document.querySelectorAll(`[data-listid='${listId}']`)[0]
                const itemContainer = listBoard.querySelector('.items-container')
                itemContainer.insertAdjacentHTML('afterbegin', insertItemView(item))
            }
        })
    }
}

const root = document.querySelector('.root')

// 1) Add event listener to Add Item button

const actionToInput = (input, event, item) => {
    input.addEventListener(event, ()=> {
        itemState[item] = input.value 
    })
}

root.addEventListener('click', (e)=> {
    if (e.target.matches('.add-item, .add-item *')) {
        // Save parent list ID and name
        const parentList = e.target.closest('.list');
        const parentListID = e.target.closest('.list').dataset.listid
        const parentListName = e.target.closest('.list').dataset.listtitle
        
        // 2) Pop up item form
        root.insertAdjacentHTML("beforebegin", optionsView(parentListName))
        setCloseFormEvent('#item-options, #item-options *')

        // 3) Get values from inputs
        
        selectInputs()
        
        itemState.title = actionToInput(nameInput,"keydown", "title")
        itemState.description = actionToInput(descriptionInput,"keydown","description")
        itemState.priority = actionToInput(priorityInput,"click","priority")
        itemState.date = actionToInput(dateInput,"change","date")
        
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
            
            addChecklist()
        })

        const checklistContainer = document.querySelector('.checklist-container')
        
        checklistContainer.addEventListener('click',(e) => {
            e.preventDefault()
            addCheckbox(e.target)   
           
        })
        
        saveBtn.addEventListener('click', ()=> {
            

            if (itemState.title) { 
                const itemInfo = createItem(itemState.title, parentListID, parentListName, itemState.description, itemState.date, itemState.priority)
                itemState.id = itemInfo.id
                itemsContainer.insertAdjacentHTML('afterbegin', insertItemView(itemState))
                saveData(itemState.id)
                closeForm()
            } else {
                alert("Item must have a title")
            }
        })
    } 

    // Step 2: acces to each item form
    if (e.target.matches('.items, .items *')) {

        // if delete btn clicked: delete item
        if (e.target.matches('.delete-item-btn, .delete-item-btn *')) {
            deleteItem(e)

        // otherwise, pop edit form
        } else {
            const parentList = e.target.closest('.items')
            const itemId = parentList.dataset.itemid
            
            itemState.items.forEach((item) => {
                if (item.id == itemId) {

                    root.insertAdjacentHTML("beforebegin", editOptionsView(item))
                    renderChecklists(item.id)
                    saveNewData(item)
                    setCloseFormEvent('#item-options, #item-options *')
                }
            })
        }
    }
})

// Action: Delete Items
const updateRenderItems = (listID) => {
    itemState.items = readStorage()
    const listBoard = document.querySelectorAll(`[data-listid='${listID}']`)[0]
    const itemContainer = listBoard.querySelector('.items-container')
    itemContainer.innerHTML = "" 
    renderItems(listID)
}

const deleteItem = (e) => {
    const itemID = e.target.closest(".items").dataset.itemid
    const listID = getListID(itemID)
    deleteItemData(itemID)
    updateRenderItems(listID)
}

const getListID = (itemID) => {
    let listId
    itemState.items.forEach((item) => {
        if (item.id === itemID) {
            listId = item.listID
        }
    })

    return listId
}

//Action: Edit

const saveNewData = (item) => {
    const editBtn = document.querySelector('#edit-item-btn')
    editBtn.addEventListener('click',()=> {
        
        itemState.items.forEach((currentItem)=> {
            
           if (item.id == currentItem.id) { 
                selectInputs()

                currentItem.title = nameInput.value
                currentItem.description = descriptionInput.value
                currentItem.priority = priorityInput.value
                currentItem.date = dateInput.value
             
                persistData()
                readStorage()
                updateRenderItems(item.listID)
                closeForm()
            }
        })
    }) 
}


