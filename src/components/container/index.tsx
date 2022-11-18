import { IChildren } from "../../interfaces/children"
import { IMaxWidth } from "../../interfaces/maxWidth"
import { ContainerStyle } from "./style"

export interface IContainer extends IChildren, IMaxWidth {}

export const Container = ({ maxWidth, children }:IContainer) => {
    return (
        <ContainerStyle maxWidth={maxWidth}>
            { children }
        </ContainerStyle>
    )
}