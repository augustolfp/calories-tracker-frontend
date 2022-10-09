import styled from 'styled-components';

export default function IngredientTemplate(props) {
  return (
    <Container>
      <h2>Ingrediente: {props.name}</h2>
      <h2>Quantidade:{props.weightInGrams} g</h2>
      <h2>Carbohidratos: {props.carbsInGrams} g</h2>
      <h2>Proteínas: {props.proteinsInGrams} g</h2>
      <h2>Gorduras: {props.fatsInGrams} g</h2>
      <h2>Calorias: {props.kcals} kCal</h2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px;
  margin: 5px;
  padding: 2px;
`;
