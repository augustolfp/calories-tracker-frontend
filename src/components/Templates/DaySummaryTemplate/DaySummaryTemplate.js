import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import PercentageDisplayCalories from '../PercentageDisplay/PercentageDisplayCalories';
import PercentageDisplayProteins from '../PercentageDisplay/PercentageDisplayProteins';
import NutrientsBox from '../NutrientsBox/NutrientsBox';
dayjs.extend(weekday);
const daysInPtBr = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
];
export default function DaySummaryTemplate(props) {
  const navigate = useNavigate();
  const formattedDay = dayjs(props.day).format('DD-MM-YYYY');
  const weekDay = daysInPtBr[dayjs(props.day).weekday()];

  return (
    <Container onClick={() => navigate(`/day/${props.id}`)}>
      <h2>
        {formattedDay}, {weekDay}
      </h2>
      <div>
        <LeftColumn>
          <PercentageDisplayCalories {...props} />
          <NutrientsBox>GORDURAS: {props.fats} g</NutrientsBox>
          <NutrientsBox>CARBOIDRATOS: {props.carbs} g</NutrientsBox>
        </LeftColumn>
        <RightColumn>
          <PercentageDisplayProteins {...props} />
          <h5>ANOTAÇÕES: {props.notes}</h5>
        </RightColumn>
      </div>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
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

  > div {
    display: flex;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  width: 250px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;

  > h5 {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    border-radius: 12px;
    border: solid 3px;
    padding: 8px;
    word-wrap: break-word;
    color: #f39227ff;
  }
`;
