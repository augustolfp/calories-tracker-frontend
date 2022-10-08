import React from 'react';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CredentialsTemplate from '../CredentialsTemplate/CredentialsTemplate';

export default function SignInPage() {
  const navigate = useNavigate();
  const { setToken, userData, setUserData, API_URL } = React.useContext(UserContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(false);

  function handleLogin(event) {
    event.preventDefault();
    setIsDisabled(true);

    const body = {
      email,
      password
    };

    const loginRequest = axios.post(`${API_URL}/sign-in`, body);

    loginRequest.then((answer) => {
      setUserData(() => ({ ...userData, name: answer.data.name }));
      setToken({
        headers: {
          Authorization: `Bearer ${answer.data.token}`
        }
      });

      navigate('/home');
    });

    loginRequest.catch((answer) => {
      alert(answer.response.data);
      setIsDisabled(false);
    });
  }

  return (
    <CredentialsTemplate>
      <Form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          disabled={isDisabled}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="senha"
          disabled={isDisabled}
          required
        />
        <button type="submit" disabled={isDisabled}>
          ENTRAR
        </button>
      </Form>
    </CredentialsTemplate>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
