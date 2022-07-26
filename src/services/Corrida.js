import { db } from "./SQLite";

export function CreateTable(){
    db.transaction((transaction)=> {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " + 
         "Corrida " +
         "id INTEGER PRIMARY KEY AUTOINCREMENT, Hora TEXT, Piloto TEXT, voltas " + "TEXT, tempoVolta TEXT, mediavelocidade TEXT);")
    })
}