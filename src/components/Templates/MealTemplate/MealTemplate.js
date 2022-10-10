import styled from 'styled-components';
import IngredientTemplate from '../IngredientTemplate/IngredientTemplate';
import React from 'react';
import CreateIngredientTemplate from '../CreateIngredientTemplate/CreateIngredientTemplate';

export default function MealTemplate(props) {
  const [viewIngredientCreator, setViewIngredientCreator] = React.useState(false);
  return (
    <Container>
      <div onClick={() => setViewIngredientCreator(!viewIngredientCreator)}>
        <h2>Refeição: {props.mealName}</h2>
        <h2>Descrição: {props.mealDescription}</h2>
        <h2>Carbohidratos: {props.carbs} g</h2>
        <h2>Proteínas: {props.proteins} g</h2>
        <h2>Gorduras: {props.fats} g</h2>
        <h2>Calorias: {props.kcals} kCal</h2>
        {props.ingredientList[0] !== null && props.ingredientList.length > 0 ? (
          props.ingredientList.map((ingredient, index) => (
            <IngredientTemplate key={index} {...ingredient} />
          ))
        ) : (
          <h2>Nenhum ingrediente!</h2>
        )}
      </div>
      {viewIngredientCreator && <CreateIngredientTemplate mealId={props.mealId} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border: solid 1px;
  padding: 5px;
  margin: 5px;

  div {
    display: flex;
    flex-direction: column;
  }
`;
