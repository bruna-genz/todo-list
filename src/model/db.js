export const database = (databaseName,database) => {
    return {
        persistData: () => {
            localStorage.setItem(databaseName,JSON.stringify(database))
        },
        readStorage: () => {
            const storage = JSON.parse(localStorage.getItem(databaseName))
            if (storage) database = storage 
            return database
        }

    }

}



