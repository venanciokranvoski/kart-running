import React from "react"
import { TouchableOpacity,
         Text, StyleSheet, Image } from "react-native";



import { RFValue } from "react-native-responsive-fontsize";


export function List({item, setPilotoSelecionado}){
    const piloto = {  "F.MASSA": "#FF924F",
    "R.BARRICHELLO": "#00911F",
    "M.WEBBER": "#2F71EB", "K.RAIKKONEN": "#FF0000",
    "F.ALONSO": "#12FFFFFF"}

    const estilos = styleFunction(piloto[item.Piloto]) 

    return (
        <TouchableOpacity style={estilos.btnClik}  onPress={()=> {
          setPilotoSelecionado(item)}}>
            <Text style={estilos.piloto}>Piloto: {item.Piloto}</Text>
            <Text style={estilos.userview}>Hora: {item.Hora}</Text>
            <Text style={estilos.voltas}>Qª Volta {item.voltas}</Text>
            <Text style={estilos.userview}> Tempo da Volta: {item.tempoVolta}</Text>
            <Text style={estilos.userview}> Velocidade Média da Volta: {item.mediavelocidade}</Text>
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
       fontSize: 19,
       fontWeight: "600",
       marginBottom: 4,
   },
   voltas: {
    fontWeight: "bold",
    borderRadius: 4,
    backgroundColor: cor,
    padding: 4,
    color: "#000",
    alignSelf: "flex-start",
    fontSize: 17,
  },
  userview:{
    fontSize: 17,
  },
})



