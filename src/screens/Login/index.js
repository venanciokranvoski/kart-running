import React from "react";


import f1 from "../../images/f1-logo.jpg"


// ++ StyleComponents ++
import { Container, 
         Logo, 
} from './style';

export default function Login (){
      return (
        <Container>
          <Logo source={f1}  />
        </Container>
      )
}