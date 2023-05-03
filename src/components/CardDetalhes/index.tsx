import { Titulos } from "../Titulos";
import { Container, ContainerIcon, Icon } from "./styles";

export function CardDetalhes(){
    return(
        <Container>
            <ContainerIcon>
                <Icon/>
            </ContainerIcon>
            <Titulos 
                titulo={"90,86"} 
                subtitulo={"das refeições dentro da dieta"}
            />
        </Container>
    )
}