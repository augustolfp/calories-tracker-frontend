import styled from 'styled-components';

export default function PageTemplate(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to right top, #c43cb8, #7e7ef2, #00a7ff, #00c5f1, #6adada);
`;
