import UserContext from '../../contexts/UserContext';
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import PageTemplate from '../PageTemplate/PageTemplate';
import DaySummaryTemplate from '../DaySummaryTemplate/DaySummaryTemplate';
import styled from 'styled-components';

export default function HomePage() {
  const { token, API_URL, userData, setUserData } = React.useContext(UserContext);

  useEffect(() => {
    const countedDaysRequest = async () => {
      try {
        const response = await axios.get(`${API_URL}/get-days-data`, token);
        setUserData((userData) => ({
          ...userData,
          days: response.data
        }));
      } catch (error) {
        alert(error.response.data);
      }
    };

    countedDaysRequest();
  }, []);

  return (
    <PageTemplate>
      <h2>Bem vindo, {userData.name}</h2>
      <CountedDaysContainer>
        {userData.days && userData.days.length > 0 ? (
          userData.days.map((day, index) => <DaySummaryTemplate key={index} {...day} />)
        ) : (
          <h2>Não há dias registrados ainda!</h2>
        )}
      </CountedDaysContainer>
    </PageTemplate>
  );
}

const CountedDaysContainer = styled.div`
  display: flex;
  width: 70vw;
`;
