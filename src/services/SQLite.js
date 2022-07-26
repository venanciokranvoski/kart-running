import * as SQLite from "expo-sqlite"

function OpenConnection() {
    const database = SQLite.openDatabase("db.db")
    return database
}

export const db = OpenConnection()