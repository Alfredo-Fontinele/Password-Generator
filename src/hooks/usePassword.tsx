import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export const usePassword = () => {
    const [password, setPassword] = useState<string>("")

    const copyPassword = () => {
        navigator.clipboard.writeText(password)
        toast.success("Senha copiada com Sucesso")
    }

    const generatePassword = (valueInput: number) => {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'
        let newPassword = ''
        for(let i = 0, n = charset.length; i < valueInput; i++){
            newPassword += charset.charAt(Math.floor(Math.random() * n));
        }
        setPassword(newPassword)
    }
    
    return {
        password,
        copyPassword,
        generatePassword
    }
}