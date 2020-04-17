import uniqid from 'uniqid';

export const lists = []

export const createList = (title, projectID) => {
    const values = {
        "id" : uniqid(),
        projectID,
        title,
    }
    lists.push(values)
   
    return values;  
}