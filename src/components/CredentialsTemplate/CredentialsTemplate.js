import React from 'react';
import styled from 'styled-components';

export default function CredentialsTemplate(props) {
  return (
    <Container>
      <CenteredDiv>{props.children}</CenteredDiv>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
