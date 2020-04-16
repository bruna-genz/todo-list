import '../assets/styles/global.scss';
import * as configRoutes from '../routes/routesConfig';
import navView from '../views/projectsViews/navView'
import mainView from '../views/projectsViews/mainView'
import { dashboardView } from '../views/ToDosViews/dashboardView';
import projectForm from '../views/projectsViews/projectFormView'
import { createProject, projects} from '../model/ProjectModel'

const state = {}

// Selectors
const root = document.querySelector('.root')
root.insertAdjacentHTML('beforebegin', navView)

configRoutes.insertPage(mainView)


// Step 1: Pop form when addBoardBtn is clicked 

const addBoardBtn = document.querySelector('.add-board')


const closeForm = () => {
    const darkBackground = document.querySelector(".dark-background")
    darkBackground.addEventListener('click', (e) => {
        if (e.target.id != 'description'){
            darkBackground.parentNode.removeChild(darkBackground)
        } 
    })
}

addBoardBtn.addEventListener('click', () => {
    root.insertAdjacentHTML('afterbegin', projectForm)
    const createProjectForm = document.querySelector('form')
    submitForm(createProjectForm)
    closeForm()
})

// Step 2: Create new project with step 1 form when enter is pressed

const newCard = (name) => {
    return `<div class="tests">${name}</div>`
}
const addCard = (title) => {
    const boardsContainer = document.querySelector('.my-boards')
    boardsContainer.insertAdjacentHTML('afterbegin',newCard(title))
}


const submitForm = (form) => {
    form.addEventListener('keydown', (e)=> {
        const inputValue = document.querySelector('#description').value
        if (e.key == 'Enter') {
            e.preventDefault()
            state.currentProject = createProject(inputValue)
            addCard(state.currentProject["title"]) 
            
            configRoutes.insertPage(dashboardView(state.currentProject))
            document.querySelector('nav').classList.add('green-nav')
        }
        
    })
}




