import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
`;

export const Titulo = styled.Text`
    text-align: center;
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.TITLE_32}px;
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const Subtitulo = styled.Text`
    text-align: center;
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.BODY_14}px;
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;