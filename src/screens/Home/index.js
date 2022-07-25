import React from "react";
import { StatusBar } from "react-native";
import { Container,
         Header,
         Logo
       } from "./style"

import  img from  "../../images/f1-logo.jpg"
import theme from "../../global/theme";


import Btn_Plus from "../../components/Btn/Circle-Add/Btn_Plus";

export default function Home(){
    return(
        <Container>
            <StatusBar backgroundColor= "#FF0000"/>
            <Header>
               <Logo source={img} />     
            </Header>

            <Btn_Plus />



            
        </Container>
    )
}