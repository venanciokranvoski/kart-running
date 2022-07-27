import React, {useState, useEffect} from "react";
import { StatusBar, FlatList } from "react-native";

import { Container,
         Header,
         Logo
       } from "./style"
import  img from  "../../images/f1-logo.jpg"

import { CreateTable, SelectRunnings, SalvaCorrida } from "../../services/Corrida";

import Btn_Plus from "../../components/Btn/Circle-Add/Btn_Plus";
import { List } from "../../components/FlatList/List";

export default function Home(){

    useEffect(()=>{
      CreateTable();
      viewCorrida();
    }, [])
     
   

    async function viewCorrida(){
        const retorno = await SelectRunnings()
        setDados(retorno)
        console.log('aqui é ', retorno);
    }

    const [dados, setDados] = useState([]);

    return(
        <Container>
            <StatusBar backgroundColor= "#FF0000"/>
            <Header>
               <Logo source={img} />     
            </Header>

            <FlatList
              data={dados}
              renderItem={(dado) => <List {...dado} />} 
              keyExtractor={dado => dado.id}
            />
            <Btn_Plus viewCorrida={viewCorrida}
            />

        </Container>
    )
}