import { SectionList, View, Text } from "react-native";
import { Botao } from "../../components/Botao";
import { CardDetalhes } from "../../components/CardDetalhes";
import { Header } from "../../components/Header";
import { Container, Texto, Titulo } from "./styles";
import { CardRefeicao } from "../../components/CardRefeicao";


export function Home() {

const DATA = 
[
    {
        title: "30.04.23",
        data:
        [
            {
                name: "X-tudo",
                date: "20:30",
                naDieta: false
            },
            {
                name: "Whey protein",
                date: "16:00",
                naDieta: true
            },
            {
                name: "Salada",
                date: "12:00",
                naDieta: true
            },
            {
                name: "Vitamina de banana",
                date: "9:30",
                naDieta: true
            }
        ]
    },
    {
        title: "01.05.23",
        data:
        [
            {
                name: "X-tudo",
                date: "20:30",
                naDieta: false
            },
            {
                name: "Whey protein",
                date: "16:00",
                naDieta: true
            },
            {
                name: "Salada",
                date: "12:00",
                naDieta: true
            },
            {
                name: "Vitamina de banana",
                date: "9:30",
                naDieta: true
            }
        ]
    },
    {
        title: "02.05.23",
        data:
        [
            {
                name: "X-tudo",
                date: "20:30",
                naDieta: false
            },
            {
                name: "Whey protein",
                date: "16:00",
                naDieta: true
            },
            {
                name: "Salada",
                date: "12:00",
                naDieta: true
            },
            {
                name: "Vitamina de banana",
                date: "9:30",
                naDieta: true
            }
        ]
    },
    {
        title: "03.05.23",
        data:
        [
            {
                name: "X-tudo",
                date: "20:30",
                naDieta: false
            },
            {
                name: "Whey protein",
                date: "16:00",
                naDieta: true
            },
            {
                name: "Salada",
                date: "12:00",
                naDieta: true
            },
            {
                name: "Vitamina de banana sasas as as as asasasa sasasasas asas asas",
                date: "9:30",
                naDieta: true
            }
        ]
    }
];


    return (
        <Container>
            <Header />
            <CardDetalhes 
                titulo={90.35} 
                subtitulo="das refeições dentro da dieta"/>
            <Texto>
                Refeições
            </Texto>
            <Botao title={"Nova refeição"} icon="add" />
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({ item }) => (
                    <CardRefeicao refeicao={item}/>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Titulo>{title}</Titulo>
                )}
                showsVerticalScrollIndicator = {false}
            />
        </Container>
    )
}