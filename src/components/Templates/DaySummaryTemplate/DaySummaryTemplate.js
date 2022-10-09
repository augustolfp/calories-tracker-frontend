import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import { Circle } from 'rc-progress';
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
  const carbsPercentage = (props.kcals / props.caloriesTarget) * 100;
  return (
    <Container onClick={() => navigate(`/day/${props.id}`)}>
      <h2>
        {formattedDay}, {weekDay}
      </h2>
      <h3>
        Energia: {props.kcals}/{props.caloriesTarget} kCal
        <Circle percent={carbsPercentage} strokeWidth={4} strokeColor="#D3D3D3" />
      </h3>
      <h4>
        Proteinas: {props.proteins}/{props.proteinsTarget} g
      </h4>
      <h4>Gorduras: {props.fats} g</h4>
      <h4>Carbohidratos: {props.carbs} g</h4>
      <h5>Anotações: {props.notes}</h5>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'ItcFeniceRegularOblique';
  padding: 20px;
  background-color: white;
  border: 2px solid #94167fff;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
`;
