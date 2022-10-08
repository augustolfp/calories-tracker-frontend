import React from 'react';
import styled from 'styled-components';

export default function CredentialsTemplate(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
