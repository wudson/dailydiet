import styled, { css } from "styled-components/native";

type Props = {
    naDieta: boolean
};

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 14px 16px 14px 12px;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    margin-top: 10px;
    gap: 12px;
`;

export const Hora = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.BODY_12}px;
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const Descricao = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.TITLE_16}px;
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
    flex: 1;
`;

export const Separator = styled.View`
    border: 0.5px solid ${({theme}) => theme.COLORS.GRAY_400};
    height: 14px;
`;

export const Status = styled.View <Props>`
    background-color: ${({naDieta, theme  }) =>
        naDieta
            ? theme.COLORS.GREEN_DARK
            : theme.COLORS.RED_DARK};
    height: 14px;
    width: 14px;
    border-radius: 100px;
`;