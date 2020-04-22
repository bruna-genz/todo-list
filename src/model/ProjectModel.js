import uniqid from 'uniqid';

export const projects = []

const persistData = () => {
    localStorage.setItem('projects',JSON.stringify(projects))
}

const readStorage = () => {
    const storage = JSON.parse(localStorage.getItem('projects'))
    if (storage) projects = storage 
}



export const createProject = (title) => {
    const values = {
        "id" : uniqid(),
        title
    }
    projects.push(values)
    persistData()
    return values;
}


