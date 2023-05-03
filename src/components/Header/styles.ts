import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    align-items:center;
    justify-content: center;
    flex-direction: row;
    height: 100px;
`;

export const ContainerLogo = styled.View`
    flex: 1;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const ContainerPerfil = styled.View`
    border-radius: 100px;
    border: 2px solid; 
    overflow: hidden;
`;

export const Perfil = styled.Image`
    width: 40px;
    height: 40px;
`;