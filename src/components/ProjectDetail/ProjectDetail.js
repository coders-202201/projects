import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Text, theme, Title } from "../../globalsStyles";

const AdriText = styled(Text)`
  font-size: 40px;
`;

const MiniText = styled.span`
  color: ${(props) => props.theme.secondaryColor};
`;

const ProjectDetail = ({ project: { name } }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Title>{name}</Title>
        <Text bold>Project details</Text>
        <AdriText>Project details without bold</AdriText>
        <MiniText>Fuá qué pasada de librería</MiniText>
      </ThemeProvider>
    </>
  );
};

export default ProjectDetail;
