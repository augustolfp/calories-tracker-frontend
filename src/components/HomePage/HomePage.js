import UserContext from '../../contexts/UserContext';
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import PageTemplate from '../Templates/PageTemplate/PageTemplate';
import DaySummaryTemplate from '../Templates/DaySummaryTemplate/DaySummaryTemplate';
import styled from 'styled-components';
import CreateDayTemplate from '../Templates/CreateDayTemplate/CreateDayTemplate';

export default function HomePage() {
  const { token, API_URL, userData, setUserData } = React.useContext(UserContext);
  const [displayCreator, setDisplayCreator] = React.useState(false);

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
      <WelcomeContainer>Seja bem vindo, {userData.name}!</WelcomeContainer>
      <CountedDaysContainer>
        {userData.days && userData.days.length > 0 ? (
          userData.days.map((day, index) => <DaySummaryTemplate key={index} {...day} />)
        ) : (
          <h2>Não há dias registrados ainda!</h2>
        )}
      </CountedDaysContainer>
      <button onClick={() => setDisplayCreator(!displayCreator)}>+</button>
      {displayCreator && <CreateDayTemplate />}
    </PageTemplate>
  );
}

const CountedDaysContainer = styled.div`
  display: flex;
  width: 70vw;
`;

const WelcomeContainer = styled.h2`
  font-family: 'ItcFeniceRegularOblique';
  color: #94167fff;
  font-size: 30px;
`;
