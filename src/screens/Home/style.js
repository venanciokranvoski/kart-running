import styled from "styled-components";

import {RFValue} from 'react-native-responsive-fontsize'

import  theme  from '../../global/theme';


export const Container = styled.View`
    flex: 1;   
    background-color: ${theme.colors.primary};
    align-items: stretch;
    justify-content: center;
`; 

export const Header = styled.View`
    height: ${RFValue(80)}px;
    align-items: center;
    padding-bottom: 5px;
`;

export const Logo= styled.Image`
    width: ${RFValue(170)}px;
    height: ${RFValue(100)}px;
`;

export const AreaPiloto = styled.View`
    padding: 0 15px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

export const Photo = styled.Image`
    width:  ${RFValue(60)}px;
    height: ${RFValue(80)}px;
    border-radius: 10px;
`