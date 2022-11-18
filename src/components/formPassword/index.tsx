import * as S from './style'
import { useState } from 'react'
import { usePassword } from './../../hooks/usePassword';

interface IFormPassword {
    titleForm: string
    minValue: number
    maxValue: number
}

export const FormPassword = ({ titleForm, minValue, maxValue }:IFormPassword) => {
    const [valueInput, setValueInput] = useState<number>(minValue)
    const { password, copyPassword, generatePassword } = usePassword()

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
                <button type="button" onClick={() => generatePassword(valueInput)}>Gerar senha</button>
            </S.ContainerInput>
            {!!(password) &&
                <S.PasswordCamp>
                    <h4>Sua Senha</h4>
                    <span onClick={copyPassword}>{password}</span>
                    <p>Clique na Senha para copiar 👆</p>
                </S.PasswordCamp>
            }
        </S.FormCamp>
    )
}
