import styled from 'styled-components';
import { Circle } from 'rc-progress';

export default function PercentageDisplayProteins(props) {
  const proteinsPercentage = (props.proteins / props.proteinsTarget) * 100;

  return (
    <Container>
      <h2>PROTEINAS</h2>
      <NutrientContainer>
        <Fraction>
          <div className="top">{props.proteins}</div>
          <div className="bottom">{props.proteinsTarget}</div>
        </Fraction>
        <h5>g</h5>
        <Circle
          className="proteinsDial"
          percent={proteinsPercentage}
          strokeWidth={8}
          trailWidth={2}
          strokeColor="#336f65ff"
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
  color: #336f65ff;
  border-radius: 12px;
  border: solid 3px;
  padding: 8px;
  margin-bottom: 8px;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 6px;
    color: #336f65ff;
  }
`;

const NutrientContainer = styled.div`
  display: flex;
  align-items: center;

  h5 {
    font-weight: bold;
    margin-right: 10px;
  }
  .proteinsDial {
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
