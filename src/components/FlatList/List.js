import React from "react"
import { TouchableOpacity,
         Text } from "react-native";

    import styled from "./style";

export function List({item}){

    return (
        <TouchableOpacity style={styled.btnClik}>
            <Text>{}</Text>
        </TouchableOpacity>
    )
}
