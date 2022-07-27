import React from "react"
import { TouchableOpacity,
         Text, StyleSheet } from "react-native";

export function List({item}){
    const piloto = { "F.MASSA": "#FF924F",
    "R.BARRICHELLO": "#00911F",
    "M.WEBBER": "#2F71EB", "K.RAIKKONEN": "#FFF5",
    "F.ALONSO": "#12FFFFFF"}
  
    const estilos = styleFunction(piloto[item.Piloto]) 

    return (
        <TouchableOpacity style={estilos.btnClik}>
            <Text style={estilos.piloto}>Piloto: {item.Piloto}</Text>
            <Text>Hora: {item.Hora}</Text>
            <Text style={estilos.voltas}>Nª Volta {item.voltas}</Text>
            <Text> Tempo Volta: {item.tempoVolta}</Text>
            <Text> Velocidade Media da Volta: {item.mediavelocidade}</Text>
        </TouchableOpacity>
    )
}
 
const styleFunction = (cor) => StyleSheet.create({
    btnClik:{
       borderRadius: 8,
       backgroundColor: '#FFFFFF',
       paddingVertical: 10,
       paddingHorizontal: 16,
       marginBottom: 8,
       borderTopWidth: 5,
       borderColor: cor,
       shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 0.23,
       shadowRadius: 2.62,
       elevation: 4,
   },
   piloto:{
       fontSize: 18,
       fontWeight: "600",
       marginBottom: 4,
   },
   voltas: {
    borderRadius: 4,
    backgroundColor: cor,
    padding: 4,
    color: "#000",
    alignSelf: "flex-start",
  }

})



