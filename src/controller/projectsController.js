import '../assets/styles/global.scss';
import * as configRoutes from '../routes/routesConfig';
import navView from '../views/projectsViews/navView'
import mainView from '../views/projectsViews/mainView'
import projectForm from '../views/projectsViews/projectFormView'

// Selectors
const root = document.querySelector('.root')
root.insertAdjacentHTML('beforebegin', navView)



configRoutes.insertPage(mainView)

// Buttons
const addBoardBtn = document.querySelector('.add-board')

addBoardBtn.addEventListener('click', () => {
    root.insertAdjacentHTML('afterbegin', projectForm)
})

