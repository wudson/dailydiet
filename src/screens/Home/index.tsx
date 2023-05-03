import { Botao } from "../../components/Botao";
import { CardDetalhes } from "../../components/CardDetalhes";
import { Header } from "../../components/Header";
import { Container, Texto } from "./styles";

export function Home(){
    return(
        <Container>
            <Header/>
            <CardDetalhes/>
            <Texto>
                Refeições
            </Texto>
            <Botao title={"Nova refeição"} />
        </Container>
    )
}