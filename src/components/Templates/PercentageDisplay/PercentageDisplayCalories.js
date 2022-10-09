import styled from 'styled-components';
import { Circle } from 'rc-progress';

export default function PercentageDisplayCalories(props) {
  const caloriesPercentage = (props.kcals / props.caloriesTarget) * 100;

  return (
    <Container>
      <h2>CALORIAS</h2>
      <NutrientContainer>
        <Fraction>
          <div className="top">{props.kcals}</div>
          <div className="bottom">{props.caloriesTarget}</div>
        </Fraction>
        <h5>kCal</h5>
        <Circle
          className="caloriesDial"
          percent={caloriesPercentage}
          strokeWidth={8}
          trailWidth={2}
          strokeColor="#e93479ff"
        />
      </NutrientContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: #e93479ff;
  border-radius: 18px;
  border: solid 3px;
  padding: 8px;
  margin-bottom: 8px;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 6px;
    color: #e93479ff;
  }
`;

const NutrientContainer = styled.div`
  display: flex;
  align-items: center;

  h5 {
    font-weight: bold;
    margin-right: 10px;
  }
  .caloriesDial {
    width: 80px;
  }
`;

const Fraction = styled.div`
  font-weight: bold;
  margin: 6px;
  .top {
    border-bottom: solid 2px;
    display: inline-block;
    float: left;
  }
  .bottom {
    display: inline-block;
    clear: left;
    float: left;
  }
`;
