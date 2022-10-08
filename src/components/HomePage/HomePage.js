import UserContext from '../../contexts/UserContext';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PageTemplate from '../PageTemplate/PageTemplate';
import DaySummaryTemplate from '../DaySummaryTemplate/DaySummaryTemplate';
import styled from 'styled-components';

export default function HomePage() {
  const { token, API_URL } = React.useContext(UserContext);
  const [daysArr, setDaysArr] = useState([]);

  useEffect(() => {
    const countedDaysRequest = async () => {
      try {
        const response = await axios.get(`${API_URL}/get-days-data`, token);
        setDaysArr(response.data);
      } catch (error) {
        alert(error.response.data);
      }
    };

    countedDaysRequest();
  }, []);

  return (
    <PageTemplate>
      <CountedDaysContainer>
        {daysArr.length > 0 ? (
          daysArr.map((day, index) => <DaySummaryTemplate key={index} {...day} />)
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
