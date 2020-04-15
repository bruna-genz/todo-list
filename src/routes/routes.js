import * as configRoutes from './routesConfig'

import mainView from './views/projectsViews/mainView'

// Buttons
const addBoardBtn = document.querySelector('.add-board')

// Routing
configRoutes.redirecTo(addBoardBtn,mainView)