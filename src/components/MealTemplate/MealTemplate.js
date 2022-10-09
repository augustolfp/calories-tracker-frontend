import styled from 'styled-components';
import IngredientTemplate from '../IngredientTemplate/IngredientTemplate';

export default function MealTemplate(props) {
  return (
    <Container>
      <h2>Refeição: {props.mealName}</h2>
      <h2>Descrição: {props.mealDescription}</h2>
      <h2>Carbohidratos: {props.carbs} g</h2>
      <h2>Proteínas: {props.proteins} g</h2>
      <h2>Gorduras: {props.fats} g</h2>
      <h2>Calorias: {props.kcals} kCal</h2>
      {props.ingredientList.length > 0 ? (
        props.ingredientList.map((ingredient, index) => (
          <IngredientTemplate key={index} {...ingredient} />
        ))
      ) : (
        <h2>Nenhum ingrediente!</h2>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px;
  padding: 5px;
  margin: 5px;
`;
