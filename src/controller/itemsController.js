import optionsView from "../views/listsViews/optionsView";
import { closeForm } from './projectsController.js';

const root = document.querySelector('.root')

// 1) Add event listener to Add Item button
root.addEventListener('click', (e)=> {
    console.log(e.target)
    if (e.target.matches('.add-item, .add-item *')) {
        // 2) Pop up item form
        root.insertAdjacentHTML("beforebegin", optionsView)
        closeForm('#item-options, #item-options *')

    }
})




// 3) Close the form clicking on button