const root = document.querySelector('.root')
     
const clear = () => {
    root.innerHTML = ''
}
const insertPage = (page) => {
    clear()
    root.insertAdjacentHTML('afterbegin',page)
} 
export const redirecTo = (btn, page) => {
    btn.addEventLister('click', () => {
        insertPage(page)
    })
}







