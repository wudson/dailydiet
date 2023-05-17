import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 24px;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;

export const Texto = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.TITLE_16}px;
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
    margin-bottom: 10px;
`;

export const Titulo = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.TITLE_18}px;
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    margin-top: 30px;
`;