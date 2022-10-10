import styled from 'styled-components';
import React from 'react';
import UserContext from '../../../contexts/UserContext';
import axios from 'axios';

export default function CreateMealTemplate(props) {
  const { token, API_URL } = React.useContext(UserContext);
  const [mealName, setMealName] = React.useState('');
  const [mealDescription, setMealDescription] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(false);

  function handleMealCreation(event) {
    event.preventDefault();
    setIsDisabled(true);

    const body = {
      name: mealName,
      description: mealDescription,
      countedDayId: props.countedDayId
    };

    const submitMeal = axios.post(`${API_URL}/add-meal`, body, token);

    submitMeal.then((response) => {
      console.log('sucesso!');
      console.log(response);
      setIsDisabled(false);
    });

    submitMeal.catch((error) => {
      console.log('Falhou!');
      console.log(error);
      setIsDisabled(false);
    });
  }
  return (
    <Container>
      <h2>Nova refeição</h2>
      <form onSubmit={handleMealCreation}>
        <input
          type="text"
          name="mealName"
          placeholder="Nome da refeição"
          value={mealName}
          disabled={isDisabled}
          onChange={(e) => setMealName(e.target.value)}
        />
        <textarea
          name="mealDescription"
          value={mealDescription}
          placeholder="Descrição"
          disabled={isDisabled}
          onChange={(e) => setMealDescription(e.target.value)}
        />
        <button type="submit" disabled={isDisabled}>
          CRIAR
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  padding: 20px 8px;
  background-color: white;
  border: none;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 24px;
  margin: 5px;
  width: 460px;
`;
