import listFormView from '../views/listsViews/listFormView'
// Step 1: Add lists to current dashboard

const popForm = (btn) => {
    btn.innerHTML = ''
    btn.classList.add('new-list-bg')
    btn.classList.remove('add-list')
    btn.insertAdjacentHTML('afterbegin',listFormView)
}

const closeForm = (closeBtn,reapearBtn) => {
    closeBtn.addEventListener('click', ()=> {
        reapearBtn.innerHTML = ''
        reapearBtn.classList.add('add-list')
        reapearBtn.classList.remove('new-list-bg')
        const btnContent = '<img src="../src/assets/images/plus.svg" alt=""><p>Add list</p>'
        reapearBtn.insertAdjacentHTML('afterbegin',btnContent)
    })
}

const root = document.querySelector('.root')
root.addEventListener('click',(e)=>{
    
    if (e.target.matches('.add-list, .add-list *')) {
        
        const addListBtn = document.querySelector('.add-list')
        popForm(addListBtn)

        const closeBtn = document.querySelector('#close-icon')
        closeForm(closeBtn,addListBtn)
        // cancel form
        // retrieve data with submit button, add list and reapear addListBtn
        
        
    }
})