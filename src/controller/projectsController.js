import '../assets/styles/global.scss';
import * as configRoutes from '../routes/routesConfig';
import navView from '../views/projectsViews/navView'
import mainView from '../views/projectsViews/mainView'
import { dashboardView } from '../views/listsViews/dashboardView';
import { projectBoardView } from '../views/projectsViews/projectBoardView';
import projectForm from '../views/projectsViews/projectFormView'
import { createProject, readStorage} from '../model/ProjectModel'
import { renderLists } from "../controller/listsController"

const state = {}

// Selectors 
let boardsContainer

const renderProjects = () => {
    if (state.projectsArray) {
        state.projectsArray.forEach(project => {
            boardsContainer = document.querySelector('.my-boards')
            boardsContainer.insertAdjacentHTML('afterbegin', projectBoardView(project))
        })
    }

    setProjectEvent()
}

// Read storage
window.addEventListener('load', () => {    
    state.projectsArray = readStorage()
    renderProjects()
})

// Step 0: Load page elements
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

const submitForm = (form) => {
    form.addEventListener('keydown', (e)=> {
        state.title = document.querySelector('#description').value
        if (e.key == 'Enter') {
            
            if (state.title) {
                e.preventDefault()
                state.currentProject = createProject(state.title)
                state.projectsArray.push(state.currentProject)       
                configRoutes.insertPage(dashboardView(state.currentProject))
                document.querySelector('nav').classList.add('green-nav')
            } else {
                alert("Project must have a name")
            }
        }
    })
}

// Step 3: Redirect to specific project page when click on project board
const setProjectEvent = () => {
    boardsContainer.addEventListener('click', (e) => {
        if (e.target.matches(".project-board")) {
            const projectID = e.target.dataset.projectid
            state.projectsArray.forEach((project) => {
                if (project.id === projectID) {
                    configRoutes.insertPage(dashboardView(project))
                    document.querySelector('nav').classList.add('green-nav')
                    renderLists(projectID)
                }
            })
        }
    })
}