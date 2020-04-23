import uniqid from 'uniqid';

export const lists = []

const persistData = () => {
    localStorage.setItem('projects',JSON.stringify(projects))
}

export const readStorage = () => {
    const storage = JSON.parse(localStorage.getItem('projects'))
    if (storage) projects = storage 
    return projects
}

export const createList = (title, projectID) => {
    const values = {
        "id" : uniqid(),
        projectID,
        title,
    }
    lists.push(values)
   
    return values;  
}