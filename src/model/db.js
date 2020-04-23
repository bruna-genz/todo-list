export const persistData = (databaseName,database) => {
    localStorage.setItem(databaseName,JSON.stringify(database))
}

export const readstorage = (databaseName,database) => {
    const storage = JSON.parse(localStorage.getItem(databaseName))
    if (storage) database = storage 
    return database
}