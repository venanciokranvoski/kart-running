import React, {useState, useEffect} from "react";
import { StatusBar, FlatList } from "react-native";

import { Container,
         Header,
         Logo,
         AreaPiloto,
         Photo
       } from "./style"
       import theme from "../../global/theme";



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
    }

    const [dados, setDados] = useState([]);
    const [pilotoSelecionado, setPilotoSelecionado] = useState({});

    return(
        <Container>
            <StatusBar backgroundColor= "#FF0000"/>
            <Header>
               <Logo source={theme.logo.logo} />     
            </Header>

            <AreaPiloto>
                <Photo source={theme.image.massa} />
                <Photo source={theme.image.barri} />
                <Photo source={theme.image.kimi}  />
                <Photo source={theme.image.webb}  />
                <Photo source={theme.image.alonso}/>
            </AreaPiloto>

            <FlatList
              data={dados}
              renderItem={(dado) => <List {...dado} setPilotoSelecionado={setPilotoSelecionado}/>} 
              keyExtractor={dado => dado.id}
            />
            <Btn_Plus viewCorrida={viewCorrida}
            pilotoSelecionado={pilotoSelecionado} setPilotoSelecionado={setPilotoSelecionado}
            />

        </Container>
    )
}