import styled from 'styled-components'
import { IMaxWidth } from '../../interfaces/maxWidth'

export const FormCamp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    gap: 1rem;
`

export const TitleCamp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 35px;
        font-weight: bold;
        color: #fff;
    }
`

export const ContainerInput = styled.div<IMaxWidth>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: ${({ maxWidth }) => maxWidth}px;
    gap: 1rem;

    span {
        font-weight: 500;
        color: #fff;
    }

    input[type="range"] {
        width: 100%;
    }

    button[type="button"] {
        width: 100%;
    }
`
