import uniqid from 'uniqid';

const projects = []

export const createProject = (title) => {
    const values = {
        "id" : uniqid(),
        "title" : title
    }
    projects.push(values)
}