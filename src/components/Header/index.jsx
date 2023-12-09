import logoNuKenzie from "../../assets/Nu Kenzie.svg"
import { StyledHeader } from "./style"

export const Header = () =>{
    return(
        <StyledHeader>
            <div>
            <img src={logoNuKenzie}/>
            </div>
        </StyledHeader>
    )
}