import React, {useState, useEffect} from "react";
import { StatusBar, FlatList } from "react-native";

import { Container,
         Header,
         Logo
       } from "./style"
import  img from  "../../images/f1-logo.jpg"

import { CreateTable, SelectRunnings } from "../../services/Corrida";

import Btn_Plus from "../../components/Btn/Circle-Add/Btn_Plus";
import { List } from "../../components/FlatList/List";

export default function Home(){

    useEffect(()=>{
      CreateTable();
      viewCorrida();
    }, [])
     
    const [dados, setDados] = useState([]);

    async function viewCorrida(){
        const corrida = await SelectRunnings()
        setDados(corrida)
        
    }

    return(
        <Container>
            <StatusBar backgroundColor= "#FF0000"/>
            <Header>
               <Logo source={img} />     
            </Header>

            <FlatList
              data={dados}
              renderItem = {<List />} 
              keyExtractor={item => item.id}
            />
            <Btn_Plus 
                title="+"
                viewCorrida={viewCorrida}
            />

        </Container>
    )
}