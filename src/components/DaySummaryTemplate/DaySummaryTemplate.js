import styled from 'styled-components';

export default function DaySummaryTemplate(props) {
  return (
    <Container>
      <h2>{props.day}</h2>
      <h3>Energia: {props.kcals}</h3>
      <h4>Proteinas: {props.proteins}</h4>
      <h4>Gorduras: {props.fats}</h4>
      <h4>Carbohidratos: {props.carbs}</h4>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: solid 1px;
`;
