import styled from 'styled-components'
import { IContainer } from '.'

export const ContainerStyle = styled.section<IContainer>`
    width: 100%;
    padding: 0 1rem;
    max-width: ${({ maxWidth }) => maxWidth}px;
    margin: auto;
`