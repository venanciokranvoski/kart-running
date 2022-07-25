import styled from "styled-components";

import {RFValue} from 'react-native-responsive-fontsize'

import  theme  from '../../global/theme';


export const Container = styled.View`
    flex: 1;   
    background-color: ${theme.colors.primary};
`; 

export const Header = styled.View`
    background-color: '#000000';

    width: 100%;
    height: ${RFValue(100)}px;

    align-items: center;
    padding-bottom: 5px;
`;

export const Logo= styled.Image`
    width: ${RFValue(170)}px;
    height: ${RFValue(100)}px;
`;