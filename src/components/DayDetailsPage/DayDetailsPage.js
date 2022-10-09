import styled from 'styled-components';
import PageTemplate from '../Templates/PageTemplate/PageTemplate';
import UserContext from '../../contexts/UserContext';
import { useParams } from 'react-router-dom';
import React from 'react';
import MealTemplate from '../Templates/MealTemplate/MealTemplate';
export default function DayDetailsPage() {
  const { userData } = React.useContext(UserContext);
  const { id } = useParams();

  const dayData = userData.days.find((obj) => obj.id === Number(id));
  return (
    <PageTemplate>
      <Container>
        {dayData.dayMeals.length > 0 ? (
          dayData.dayMeals.map((meal, index) => <MealTemplate key={index} {...meal} />)
        ) : (
          <h2>Nenhuma refeição ainda!</h2>
        )}
      </Container>
    </PageTemplate>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
