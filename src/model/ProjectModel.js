import uniqid from 'uniqid';

export const projects = []

export const createProject = (title) => {
    const values = {
        "id" : uniqid(),
        title
    }
    projects.push(values)
   
    return values;
}