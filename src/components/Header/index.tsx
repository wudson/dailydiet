import { Container, ContainerLogo, Logo, Perfil, ContainerPerfil } from "./styles";
import logoImg from "../../assets/Logo.png";
import perfilImg from "../../assets/perfil.png";

export function Header(){
    return(
        <Container>
            <ContainerLogo>
                <Logo source={logoImg}/>
            </ContainerLogo>
            <ContainerPerfil>
                <Perfil source={perfilImg}/>
            </ContainerPerfil>
        </Container>
    )
}