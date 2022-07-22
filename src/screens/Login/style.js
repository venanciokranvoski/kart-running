import styled from "styled-components";
import theme from "../../global/theme";

import {RFValue, RFPercentage} from 'react-native-responsive-fontsize'


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${theme.colors.primary};
    justify-content: center;
    align-items: center;
`;

export const Logo= styled.Image`
    width: ${RFValue(285)}px;
    height: ${RFValue(170)}px;
`;

export const AreaBtn = styled.View` 
    flex: 1;
    margin-top: ${RFPercentage(50)}px;
    justify-content: center;
    align-items: center;
    width: ${RFPercentage(50)}px;
    height: ${RFValue(60)}px;
`;

