import { Container, Titulo, Subtitulo } from "./styles";

type Props = {
    titulo: string;
    subtitulo: string;
}

export function Titulos({titulo, subtitulo}: Props){
    return(
        <Container>
            <Titulo>
                {titulo}
            </Titulo>
            <Subtitulo>
                {subtitulo}
            </Subtitulo>
        </Container>
    )
}