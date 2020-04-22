import uniqid from 'uniqid';
import { persistData, readstorage } from "./db";

let projects = []



/*const persistData = () => {
    localStorage.setItem('projects',JSON.stringify(projects))
}*/

export const readStorage = () =>  readstorage('projects',projects) 
 


export const createProject = (title) => {
    const values = {
        "id" : uniqid(),
        title
    }
    projects.push(values)
    persistData('projects',projects)
    return values;
}


