import { RefeicoesDTO } from "../../storage/refeicao/RefeicaoDTO";
import { Container, Hora, Descricao, Status, Separator } from "./styles";

type Props = {
    refeicao: RefeicoesDTO
};

export function CardRefeicao({refeicao}: Props){
    return(
        <Container>
            <Hora>
                {refeicao.date}
            </Hora>
            <Separator/>
            <Descricao numberOfLines={1}>
                {refeicao.name}
            </Descricao>
            <Status naDieta={refeicao.naDieta}/>
        </Container>
    )
}