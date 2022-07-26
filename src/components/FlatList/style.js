import styled from "styled-components";
import theme from "../../global/theme";

export const Container = styled.TouchableOpacity`
    border-radius: 8px;
    background-color: #FFFFFF;
    padding: 16px;
    margin-bottom: 8px;
    border-width: ${theme.colors.secondary};
    box-shadow: #000;
`;

export const Titulo = styled.Text`
    font-size: 25;
    font-weight: 700;
    margin-bottom: 4px;
`
export const Texto = styled.Text`
    line-height: 28;
` 

