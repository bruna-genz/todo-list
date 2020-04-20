import '../assets/styles/global.scss';
import * as configRoutes from '../routes/routesConfig';
import navView from '../views/projectsViews/navView'
import mainView from '../views/projectsViews/mainView'
import { dashboardView } from '../views/listsViews/dashboardView';
import projectForm from '../views/projectsViews/projectFormView'
import { createProject, projects} from '../model/ProjectModel'

const state = {}

// Selectors
const root = document.querySelector('.root')
root.insertAdjacentHTML('beforebegin', navView)

configRoutes.insertPage(mainView)


// Step 1: Pop form when addBoardBtn is clicked 

const addBoardBtn = document.querySelector('.add-board')


export const closeForm = (elements) => {
    const darkBackground = document.querySelector(".dark-background")
    darkBackground.addEventListener('click', (e) => {
        if (!e.target.matches(elements)){
            darkBackground.parentNode.removeChild(darkBackground)
        } 
    })
}

addBoardBtn.addEventListener('click', () => {
    root.insertAdjacentHTML('afterbegin', projectForm)
    const createProjectForm = document.querySelector('form')
    submitForm(createProjectForm)
    closeForm('#new-project, #new-project *')
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
        state.title = document.querySelector('#description').value
        if (e.key == 'Enter') {
            
            if (state.title) {
                e.preventDefault()
                state.currentProject = createProject(state.title)
                addCard(state.currentProject["title"]) 
                
                configRoutes.insertPage(dashboardView(state.currentProject))
                document.querySelector('nav').classList.add('green-nav')
            } else {
                alert("Project must have a name")
            }
        }
    })
}




