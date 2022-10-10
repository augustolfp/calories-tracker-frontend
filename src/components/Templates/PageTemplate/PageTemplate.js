import styled from 'styled-components';

export default function PageTemplate(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  margin: 40px;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
