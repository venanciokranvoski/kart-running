import styled from "styled-components";
import theme from "../../global/theme";

import {RFValue} from "react-native-responsive-fontsize"

export const Container = styled.TouchableOpacity`
        width: 90%;
        background-color: ${theme.colors.secondary};
        padding: 18px;
        align-items: center;
        border-radius: 7px;
`;

export const Title = styled.Text`
    font-size : ${RFValue(16)}px;
    color: ${theme.colors.primary};
    font-weight: bold;
`;

