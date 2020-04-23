import uniqid from 'uniqid';
//import { persistData, readstorage } from "./db";

let projects = []


const persistData = () => {
    localStorage.setItem('projects', JSON.stringify(projects))
}

export const readStorage = () => {
    const storage = JSON.parse(localStorage.getItem('projects'))
    if (storage) projects = storage 
    return projects
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



