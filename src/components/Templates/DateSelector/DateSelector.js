import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
export default function DateSelector({ newDate, setNewDate }) {
  return (
    <Container>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={newDate}
        className="date-selector"
        onChange={(date) => {
          setNewDate(date);
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  .date-selector {
    box-sizing: border-box;
    height: 46px;
    border: 2px solid #94167fff;
    color: #94167fff;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin: 3px 0;
    padding: 0 6px;
  }
`;
