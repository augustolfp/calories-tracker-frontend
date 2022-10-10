import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import axios from 'axios';
import UserContext from '../../../contexts/UserContext';
import React from 'react';

export default function SearchIngredients() {
  const { token, API_URL } = React.useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState([]);

  function handleSelectedIngredient(props) {
    setSelectedResult([
      `${props.description}`,
      `Quantidade-base: ${props.baseQty} g`,
      `Proteinas: ${props.proteins} g`,
      `Carboidratos: ${props.carbs}`,
      `gorduras: ${props.fats} g`,
      `Calorias: ${props.kcals} kcal`
    ]);
  }

  useEffect(() => {
    if (searchTerm !== '') {
      const searchRequest = axios.get(`${API_URL}/search/${searchTerm}`, token);

      searchRequest.then((res) => {
        setSearchResults(res.data.results);
        console.log('Sucesso');
      });
      searchRequest.catch((error) => {
        console.log(error);
        console.log(token);
      });
    }
  }, [searchTerm]);

  function handleResults() {
    if (searchResults.length > 0 && searchTerm.length >= 3) {
      return searchResults.map((result, index) => (
        <ResultItem key={index} onClick={() => handleSelectedIngredient(result)}>
          {result.description}
        </ResultItem>
      ));
    }

    if (searchResults.length === 0 && searchTerm.length >= 3) {
      return <h1>Nenhum alimento encontrado!</h1>;
    }
  }

  return (
    <Container>
      <SearchContainer>
        <SearchInterface>
          <DebounceInput
            minLength={3}
            debounceTimeout={300}
            value={searchTerm}
            placeholder="Pesquisar alimentos"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ResultsContainer>{handleResults()}</ResultsContainer>
        </SearchInterface>
      </SearchContainer>
      <SelectionContainer>
        {selectedResult.length > 0 ? (
          selectedResult.map((result, index) => <h1 key={index}>{result}</h1>)
        ) : (
          <h1></h1>
        )}
      </SelectionContainer>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
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
`;

const SearchInterface = styled.div`
  border-radius: 8px;

  input {
    box-sizing: border-box;
    height: 46px;
    width: 180px;
    border-radius: 8px;
    border-style: solid 1px;
    background-color: white;
    font-family: 'Roboto', sans-serif;
    color: #c6c6c6;
    font-size: 12px;
    padding: 0px 14px;
  }
`;

const ResultsContainer = styled.div``;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
`;

const SelectionContainer = styled.div``;

const ResultItem = styled.h1`
  :hover {
    background-color: gray;
  }
`;
