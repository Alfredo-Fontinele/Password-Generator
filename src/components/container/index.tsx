import { IChildren } from "../../interfaces/children"
import { ContainerStyle } from "./style"

export interface IContainer extends IChildren {
    maxWidth: number
}

export const Container = ({ maxWidth, children }:IContainer) => {
    return (
        <ContainerStyle maxWidth={maxWidth}>
            { children }
        </ContainerStyle>
    )
}