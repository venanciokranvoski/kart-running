import { db } from "./SQLite";

export function CreateTable()  {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " + 
         "Corrida " +
         "(id INTEGER PRIMARY KEY AUTOINCREMENT, Hora TEXT ," +
            " Piloto TEXT, voltas  TEXT, tempoVolta TEXT, mediavelocidade TEXT)")
    })
}

export async function SalvaCorrida(corrida){
        return new Promise((resolve)=> {
            db.transaction((transaction)=> {
                transaction.executeSql("INSERT INTO Corrida (Hora, Piloto, voltas, tempoVolta, mediavelocidade) VALUES (?,?,?,?,?);", [corrida.hora, corrida.piloto, corrida.voltas, corrida.time, corrida.velocidade], () => {
                resolve("Corrida Adicionada com sucesso")          
            })
          })     
        })     
}

export async function SelectRunnings(){
        return new Promise((resolve)=> {
            db.transaction((transaction)=> {
                transaction.executeSql("SELECT * FROM Corrida;", [], (transaction, resultado)=> {
                resolve(resultado.rows._array)          
            })
        })     
    })      
}

export async function UpdateDadosRunning(corrida){
    return new Promise((resolve) => {
       db.transaction((transaction)=>{
        transaction.executeSql("UPDATE Corrida SET Hora = ?, Piloto = ?, voltas = ?, tempoVolta = ?, mediavelocidade = ?  WHERE id = ?;", [corrida.hora, corrida.piloto, corrida.voltas, corrida.time, corrida.velocidade, corrida.id], () => {
           resolve("Corrida Atualizada com Sucesso")
        })
       })
    })
}

export async function RemoveCorrida(corrida){
    return new Promise((resolve) => {
       db.transaction((transaction)=>{
        transaction.executeSql("DELETE FROM Corrida WHERE id = ?;", [corrida.id], () => {
           resolve("Corrida removida com Sucesso")
        })
       })
    })
  }