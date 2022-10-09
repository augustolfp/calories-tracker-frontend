import styled from 'styled-components';
import PageTemplate from '../PageTemplate/PageTemplate';
import UserContext from '../../contexts/UserContext';
import { useParams } from 'react-router-dom';
import React from 'react';
export default function DayDetailsPage() {
  const { userData } = React.useContext(UserContext);
  const { id } = useParams();

  const dayData = userData.days.find((obj) => obj.id === Number(id));
  console.log(dayData);
  return (
    <PageTemplate>
      <Container>{JSON.stringify(dayData)}</Container>
    </PageTemplate>
  );
}

const Container = styled.div`
  display: flex;
`;
