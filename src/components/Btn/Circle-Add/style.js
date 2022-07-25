import styled from "styled-components";
import theme from "../../../global/theme"


export const Container = styled.TouchableOpacity`
    background-color:  ${theme.colors.secondary};
    justify-content: center;
    height: 55px;
    width: 55px;
    margin: 16px;
    align-items: center;
    border-radius: 9999px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`; 

export const Texto = styled.Text`
    font-size: 32px;
    line-height: 32;
    color: ${theme.colors.primary};
`;

export const Modal = styled.Modal``;


