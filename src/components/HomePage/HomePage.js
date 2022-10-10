import UserContext from '../../contexts/UserContext';
import React from 'react';
import PageTemplate from '../Templates/PageTemplate/PageTemplate';
import DaySummaryTemplate from '../Templates/DaySummaryTemplate/DaySummaryTemplate';
import styled from 'styled-components';
import CreateDayTemplate from '../Templates/CreateDayTemplate/CreateDayTemplate';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const { userData, setUserData, token, API_URL } = React.useContext(UserContext);

  React.useEffect(() => {
    const response = axios.get(`${API_URL}/get-days-data`, token);
    response.then((answer) => {
      setUserData({
        days: answer.data
      });
    });
    response.catch((error) => {
      console.log(error);
      navigate('/sign-in');
    });
  }, []);
  return (
    <PageTemplate>
      <CountedDaysContainer>
        {userData.days && userData.days.length > 0 ? (
          userData.days.map((day, index) => <DaySummaryTemplate key={index} {...day} />)
        ) : (
          <h2>Não há dias registrados ainda!</h2>
        )}
        <CreateDayTemplate />
      </CountedDaysContainer>
    </PageTemplate>
  );
}

const CountedDaysContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 960px;
`;
