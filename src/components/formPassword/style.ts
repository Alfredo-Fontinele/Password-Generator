import styled from 'styled-components'
import { IMaxWidth } from '../../interfaces/maxWidth'

export const FormCamp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    gap: 1.5rem;
`

export const TitleCamp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
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
        cursor: pointer;
        width: 100%;
    }

    button[type="button"] {
        cursor: pointer;
        width: 100%;
        font-weight: bold;
        padding: 0.4rem 0;
        color: #fff;
        transition: all 0.7s;
        border-radius: 5px;
        background-color: slateblue;
    }

    button[type="button"]:hover {
        background-color: mediumspringgreen;
    }
`

export const PasswordCamp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    color: #fff;
    cursor: pointer;

    p {
        transition: all 0.4s;
        opacity: 0;
        padding: 1rem;
        border: 1px solid mediumspringgreen;
    }

    &:hover p {
        opacity: 1;
    }
`