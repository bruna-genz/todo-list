const root = document.querySelector('.root')
     
const clear = () => {
    root.innerHTML = ''
}
export const insertPage = (page) => {
    clear()
    root.insertAdjacentHTML('afterbegin',page)
} 
export const redirecTo = (btn, page) => {
    btn.addEventListener('click', () => {
        insertPage(page)
    })
}







