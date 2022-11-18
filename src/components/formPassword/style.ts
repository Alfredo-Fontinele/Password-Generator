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
    gap: 1.7rem;

    span {
        font-weight: 500;
        color: #fff;
    }

    input[type="range"] {
        -webkit-appearance: none;
        transition: .2s;
        width: 100%;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 4px;
        background: springgreen;
        cursor: pointer;
    }

    input[type="range"]::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: #04AA6D;
        cursor: pointer;
    }

    button[type="button"] {
        cursor: pointer;
        width: 100%;
        font-weight: bold;
        padding: 0.5rem 0;
        color: #fff;
        transition: all 0.7s;
        border-radius: 5px;
        background-color: slateblue;
    }

    button[type="button"]:hover {
        box-shadow: 1px 1px 30px mediumspringgreen;
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

    p {
        transition: all 0.4s;
        opacity: 0;
        padding: 1rem;
        border: 1px solid mediumspringgreen;
    }

    span {
        cursor: pointer;
    }

    span:hover + p {
        opacity: 1;
    }
`