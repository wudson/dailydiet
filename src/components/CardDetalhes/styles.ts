import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    align-items:center;
    justify-content: center;
    flex-direction: row;
    height: 102px;
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
    border-radius: 8px;
    padding: 20px 16px;
`;

export const ContainerIcon = styled.TouchableOpacity`
    position: absolute;
    top: 8px;
    right: 8px;
`;

export const Icon = styled(ArrowUpRight).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24
}))``;