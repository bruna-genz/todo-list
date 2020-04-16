import uniqid from 'uniqid';

export const lists = []

export const createList = (title) => {
    const values = {
        "id" : uniqid(),
        "title" : title,
    }
    lists.push(values)
   
    return values;
    
}