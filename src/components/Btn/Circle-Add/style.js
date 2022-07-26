import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container_Father: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    teste: {
      width: '100%',
    },
    style_Modal: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 32,
        marginTop: 10,
        marginHorizontal: 18,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.30,
        elevation: 10,
    },
    btnMais: {
        backgroundColor: "#FF0000",
        justifyContent: "center",
        height: 55,
        width: 55,
        margin: 18,
        alignItems: "center",
        borderRadius: 9999,
        position: "absolute",
        bottom: 0,
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    txtMemo : {
        fontSize: 32,
        lineHeight: 40,
        color: '#FFFFFF',
    },
    modalTitulo:{
        fontSize: 29,
        fontWeight: "600",
        marginBottom: 15,  
    },
    textinput:{
        fontSize: 15,
        marginBottom: 20,
        marginHorizontal: 4,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
    },
    modalPicker:{
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#EEEEEE",
      marginBottom: 10,
    },
    txtEspace:{
        padding: 5,
        fontSize: 15,
        fontWeight: "bold",
    },
    areaBtn:{
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    btnSalvar:{
        backgroundColor: "#2ea805",
        borderRadius: 7,
        padding: 7,
        width: 70,
        alignItems: "center",
        fontSize: 15,
    },
    BtnDeletar: {
        backgroundColor: "#d62a18",
        borderRadius: 10,
        padding: 8,
        width: 80,
        alignItems: "center",
      },
      BtnSair: {
        backgroundColor: "#000000",
        borderRadius: 10,
        padding: 8,
        width: 80,
        alignItems: "center",
      },
      txtbtn:{
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: "bold"
      }




})


export default styles;

