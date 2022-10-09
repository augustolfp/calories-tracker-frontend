import styled from 'styled-components';

export default function PageTemplate(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f9ac53ff;
`;
