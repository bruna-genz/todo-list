import { format } from 'date-fns'

export const insertItemView = (item) => {
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
                <button class="delete-item-btn"><img src="../src/assets/images/bin.svg" alt="menu icon" class="nav-icon"></button>
            </div>
            
            `
}