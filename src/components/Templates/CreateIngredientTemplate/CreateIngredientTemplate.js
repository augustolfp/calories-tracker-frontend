import styled from 'styled-components';
import React from 'react';
import UserContext from '../../../contexts/UserContext';
import axios from 'axios';
import SearchIngredients from '../SearchIngredients/SearchIngredients';

export default function CreateIngredientTemplate(props) {
  const { token, API_URL } = React.useContext(UserContext);
  const [ingName, setIngName] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [carbs, setCarbs] = React.useState('');
  const [fats, setFats] = React.useState('');
  const [proteins, setProteins] = React.useState('');
  const [kcals, setKcals] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(false);

  function handleIngredientCreation(event) {
    event.preventDefault();
    setIsDisabled(true);

    const body = {
      ingredients: [
        {
          name: ingName,
          mealId: props.mealId,
          weightInGrams: Number(weight),
          carbsInGrams: Number(carbs),
          fatsInGrams: Number(fats),
          proteinsInGrams: Number(proteins),
          kcals: Number(kcals)
        }
      ]
    };

    const submitIngredient = axios.post(`${API_URL}/add-ingredients`, body, token);
    console.log(body);
    submitIngredient.then((response) => {
      console.log('sucesso!');
      console.log(response);
      setIsDisabled(false);
    });

    submitIngredient.catch((error) => {
      console.log('Falhou!');
      console.log(error);
      setIsDisabled(false);
    });
  }

  return (
    <Container>
      <h2>Adicionar Ingrediente</h2>
      <form onSubmit={handleIngredientCreation}>
        <input
          type="text"
          name="ingName"
          placeholder="Nome do ingrediente"
          value={ingName}
          disabled={isDisabled}
          onChange={(e) => setIngName(e.target.value)}
        />
        <input
          type="number"
          name="weight"
          value={weight}
          placeholder="peso em g"
          disabled={isDisabled}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          name="carbs"
          value={carbs}
          placeholder="carbos em g"
          disabled={isDisabled}
          onChange={(e) => setCarbs(e.target.value)}
        />
        <input
          type="number"
          name="fats"
          value={fats}
          placeholder="gorduras em g"
          disabled={isDisabled}
          onChange={(e) => setFats(e.target.value)}
        />
        <input
          type="number"
          name="proteins"
          value={proteins}
          placeholder="proteinas em g"
          disabled={isDisabled}
          onChange={(e) => setProteins(e.target.value)}
        />
        <input
          type="number"
          name="kcals"
          value={kcals}
          placeholder="kcals em g"
          disabled={isDisabled}
          onChange={(e) => setKcals(e.target.value)}
        />
        <button type="submit" disabled={isDisabled}>
          CRIAR
        </button>
      </form>
      <SearchIngredients />
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  form {
    display: flex;
    flex-direction: column;
  }
`;
