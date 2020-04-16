// Step 1: Add lists to current dashboard
const root = document.querySelector('.root')
root.addEventListener('click',(e)=>{
    if (e.target.matches('#add-list, #add-list *')) {
        console.log('it is working')
    }
})
//  