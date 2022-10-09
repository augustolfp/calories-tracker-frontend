import React from 'react';
import vaporWaveBanana from '../../../assets/images/vaporwaveBanana.svg';
import styled from 'styled-components';

export default function CredentialsTemplate(props) {
  return (
    <Container>
      <BrandContainer>
        <BananaContainer src={vaporWaveBanana} />
        <h1>n o - n o n s e n s e</h1>
        <h2>c a l o r i e s - t r a c k e r</h2>
      </BrandContainer>
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  h1 {
    font-family: 'Lazer84';
    font-size: 40px;
    color: #e93479ff;
    margin-bottom: 10px;
  }

  h2 {
    font-family: 'Lazer84';
    font-size: 15px;
    color: #94167fff;
  }
`;

const BananaContainer = styled.img`
  width: 300px;
  margin-bottom: 25px;
`;
