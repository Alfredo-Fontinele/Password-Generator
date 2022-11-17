import * as S from './style'
import { useState, useEffect } from 'react'

interface IFormPassword {
    titleForm: string
    minValue: number
    maxValue: number
}

export const FormPassword = ({ titleForm, minValue, maxValue }:IFormPassword) => {
    const [password, setPassword] = useState<string | null>(null)
    const [valueInput, setValueInput] = useState<number>(minValue)

    const copyPassword = () => {
        if (password) {
            navigator.clipboard.writeText(password)
            alert("Senha copiada com Sucesso")
        }
    }

    const generatePassword = () => {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'
        let newPassword = ''
        for(let i = 0, n = charset.length; i < valueInput; ++i){
            newPassword += charset.charAt(Math.floor(Math.random() * n));
        }
        setPassword(newPassword)
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
            {!!(password) &&
                <>
                    <S.PasswordCamp onClick={copyPassword}>
                        <h4>Sua Senha</h4>
                        <span>{password}</span>
                        <p>Clique na Senha para copiar 👆</p>
                    </S.PasswordCamp>
                </>
            }
        </S.FormCamp>
    )
}
