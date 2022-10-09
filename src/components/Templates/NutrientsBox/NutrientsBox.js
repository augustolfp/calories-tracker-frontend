import styled from 'styled-components';

export default function NutrientsBox(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  border-radius: 12px;
  border: solid 3px;
  padding: 8px;
  margin-bottom: 8px;
  color: #e72130ff;
`;
