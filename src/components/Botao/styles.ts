import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;
    min-height: 50px;
    max-height: 50px;
    background-color: ${({ theme, type }) =>
        type === 'PRIMARY'
            ? theme.COLORS.GRAY_200
            : theme.COLORS.WHITE};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 10px 24px;
    ${({ theme, type }) => type === 'SECONDARY' && css`
        border: 1px solid ${theme.COLORS.GRAY_100};
    `};
`;

export const Title = styled.Text <Props>`
${({theme, type}) => css`
    font-size: ${theme.FONT_SIZE.BODY_14}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${ type === 'PRIMARY'
            ? theme.COLORS.WHITE
            : theme.COLORS.GRAY_100};
    margin-left: 10px;
`};
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
}))``;

