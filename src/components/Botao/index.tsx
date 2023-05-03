import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title, Icon } from "./styles";
import {MaterialIcons} from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    icon?: keyof typeof MaterialIcons.glyphMap;
}

export function Botao({ title, type = 'PRIMARY', icon, ...rest }: Props){
    return(
        <Container type={type} activeOpacity={0.7} {...rest}>
            <Icon  name={icon} type={type}/>
            <Title type={type}>
                {title}
            </Title>
        </Container>
    )
}