import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons'

type Props = {
    titulo: number;
}

export const Container = styled.View <Props>`
    width: 100%;
    align-items:center;
    justify-content: center;
    flex-direction: row;
    height: 102px;
    background-color: 
        ${({theme, titulo}) => 
            titulo > 50 
                ? theme.COLORS.GREEN_LIGHT
                : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
    padding: 20px 16px;
    margin-bottom: 32px;
`;

export const ContainerIcon = styled.TouchableOpacity`
    position: absolute;
    top: 8px;
    right: 8px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, titulo}) => ({
    color: titulo > 50 
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK,
    size: 24
}))``;