import UserContext from '../../../contexts/UserContext';
import styled from 'styled-components';
import React from 'react';
import DateSelector from '../DateSelector/DateSelector';
import axios from 'axios';

export default function CreateDayTemplate() {
  const { token, API_URL } = React.useContext(UserContext);
  const [newDate, setNewDate] = React.useState(new Date());
  const [newNotes, setNewNotes] = React.useState('');
  const [newCaloriesTarget, setNewCaloriesTarget] = React.useState();
  const [newProteinsTarget, setNewProteinsTarget] = React.useState();
  const [isDisabled, setIsDisabled] = React.useState(false);

  function handleDayCreation(event) {
    event.preventDefault();
    setIsDisabled(true);

    const body = {
      day: newDate.toISOString(),
      notes: newNotes,
      caloriesTarget: Number(newCaloriesTarget),
      proteinsTarget: Number(newProteinsTarget)
    };

    const submitDay = axios.post(`${API_URL}/add-counted-day`, body, token);
    console.log(body);
    submitDay.then((response) => {
      console.log('sucesso!');
      console.log(response);
    });

    submitDay.catch((error) => {
      console.log('Falhou!');
      console.log(error);
    });
  }

  return (
    <Container>
      <h2>Adicionar dia</h2>
      <form onSubmit={handleDayCreation}>
        <DateSelector newDate={newDate} setNewDate={setNewDate} disabled={isDisabled} />
        <input
          type="text"
          name="notes"
          value={newNotes}
          placeholder="Anotações"
          disabled={isDisabled}
          onChange={(e) => setNewNotes(e.target.value)}
        />
        <input
          type="number"
          name="caloriesTarget"
          placeholder="Alvo de calorias"
          value={newCaloriesTarget}
          disabled={isDisabled}
          onChange={(e) => setNewCaloriesTarget(e.target.value)}
        />
        <input
          type="number"
          name="proteinsTarget"
          value={newProteinsTarget}
          placeholder="Alvo de proteinas"
          disabled={isDisabled}
          onChange={(e) => setNewProteinsTarget(e.target.value)}
        />
        <button type="submit" disabled={isDisabled}>
          CRIAR
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 24px;
  margin: 5px;
  width: 460px;

  > h2 {
    font-weight: bold;
    color: #94167fff;
    font-size: 20px;
    margin-bottom: 12px;
  }
`;
