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
      return searchResults.map((result) => {
        <h1>{result.description}</h1>;
      });
    }

    if (searchResults.length === 0 && searchTerm.length >= 3) {
      return <h1>Nenhum alimento encontrado!</h1>;
    }
  }

  return (
    <Container>
      <SearchInterface>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          value={searchTerm}
          placeholder="Pesquisar alimentos"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchResultBox>{handleResults()}</SearchResultBox>
      </SearchInterface>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  padding: 20px 8px;
  background-color: white;
  border: none;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 24px;
  margin: 5px;
  width: 460px;
`;

const SearchInterface = styled.div`
  position: absolute;
  top: 0;
  background: #e7e7e7;
  border-radius: 8px;

  input {
    box-sizing: border-box;
    width: 30vw;
    height: 46px;
    border-radius: 8px;
    border-style: none;
    background-color: white;
    font-family: 'Lato', sans-serif;
    color: #c6c6c6;
    font-size: 19px;
    padding: 0px 14px;
  }
`;

const SearchResultBox = styled.div``;
