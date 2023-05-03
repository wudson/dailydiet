import { CardDetalhes } from "../../components/CardDetalhes";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Home(){
    return(
        <Container>
            <Header/>
            <CardDetalhes/>
        </Container>
    )
}