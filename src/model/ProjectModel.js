import uniqid from 'uniqid';

export const projects = []

export const createProject = (title) => {
    const values = {
        "id" : uniqid(),
        "title" : title
    }
    projects.push(values)
    console.log(projects)
}