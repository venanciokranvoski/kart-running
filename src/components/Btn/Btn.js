import React from 'react'
import { Container, Title } from './style';

export default function Btn({title, ...rest}){
    return (
        <Container {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}
