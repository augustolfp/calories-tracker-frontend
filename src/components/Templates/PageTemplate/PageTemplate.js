import styled from 'styled-components';

export default function PageTemplate(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #cbffe6ff;
`;
