import styled from 'styled-components';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
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
  const formattedDay = dayjs(props.day).format('DD-MM-YYYY');
  const weekDay = daysInPtBr[dayjs(props.day).weekday()];
  return (
    <Container>
      <h2>{formattedDay}</h2>
      <h2>{weekDay}</h2>
      <h3>Energia: {props.kcals} kCal</h3>
      <h4>Proteinas: {props.proteins} g</h4>
      <h4>Gorduras: {props.fats} g</h4>
      <h4>Carbohidratos: {props.carbs} g</h4>
      <h5>Anotações: {props.notes}</h5>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px;
  padding: 5px;
  margin: 5px;
`;
