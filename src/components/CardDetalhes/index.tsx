import { Titulos } from "../Titulos";
import { Container, ContainerIcon, Icon } from "./styles";

type Props = {
    titulo: number;
    subtitulo: string;
};

export function CardDetalhes({titulo, subtitulo}: Props){
    return(
        <Container titulo={titulo}>
            <ContainerIcon>
                <Icon name="north-east" titulo={titulo}/>
            </ContainerIcon>
            <Titulos 
                titulo={`${titulo}%`} 
                subtitulo={subtitulo}
            />
        </Container>
    )
}