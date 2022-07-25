import React from "react";

// ++Components++
import Btn from "../../components/Btn/Btn";

// ++Imagens++
import f1 from "../../images/f1-logo.jpg"


// ++ StyleComponents ++
import { Container, 
         Logo, 
         AreaBtn
} from './style';

export default function Login ({navigation}){
      return (
        <Container>
          <Logo source={f1}  />
          <AreaBtn>
               <Btn
                 onPress={()=> navigation.navigate("Home")}
                 title= "Acessar"
               /> 
          </AreaBtn> 
        </Container>
      )
}