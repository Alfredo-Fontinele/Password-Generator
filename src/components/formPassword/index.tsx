import * as S from './style'
import { useState, useEffect } from 'react'

interface IFormPassword {
    titleForm: string
    minValue: number
    maxValue: number
}

export const FormPassword = ({ titleForm, minValue, maxValue }:IFormPassword) => {
    const [valueInput, setValueInput] = useState<number>(minValue)

    const copyPassword = () => {
        console.log("")
    }

    const generatePassword = () => {
        console.log("")
    }

    return (
        <S.FormCamp>
            <S.TitleCamp>
                <h1>{!titleForm ? "Password Generator" : titleForm}</h1>
            </S.TitleCamp>
            <S.ContainerInput maxWidth={400}>
                <span>Tamanho {valueInput} caracteres</span>
                <input 
                    type="range"
                    min={minValue} 
                    max={maxValue}
                    value={valueInput}
                    onChange={(e) => setValueInput(+e.target.value)}
                />
                <button type="button" onClick={generatePassword}>Gerar senha</button>
            </S.ContainerInput>
            {/* <div id="container-password" onClick={copyPassword} className="container-password hide">
                <span className="title">Sua senha gerada foi:</span>
                <span id="password"  className="password"></span>
                <span className="tooltip">Clique na senha para copiar. 👆</span>
            </div> */}
        </S.FormCamp>
    )
}