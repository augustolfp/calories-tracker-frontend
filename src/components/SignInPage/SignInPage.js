import React from 'react';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CredentialsTemplate from '../Templates/CredentialsTemplate/CredentialsTemplate';
import PageTemplate from '../Templates/PageTemplate/PageTemplate';

export default function SignInPage() {
  const navigate = useNavigate();
  const { setToken, API_URL } = React.useContext(UserContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(false);

  React.useEffect(() => {
    const savedToken = localStorage.getItem('token');

    if (savedToken) {
      const foundToken = JSON.parse(savedToken);
      const checkToken = axios.get(`${API_URL}/get-days-data`, foundToken);
      checkToken.then(() => {
        setToken(foundToken);
        navigate('/home');
      });
      checkToken.catch(() => {
        return;
      });
    }
  }, []);

  function handleLogin(event) {
    event.preventDefault();
    setIsDisabled(true);

    const body = {
      email,
      password
    };

    const loginRequest = axios.post(`${API_URL}/sign-in`, body);

    loginRequest.then((answer) => {
      const token = {
        headers: {
          Authorization: `Bearer ${answer.data.token}`
        }
      };
      localStorage.setItem('token', JSON.stringify(token));
      setToken(token);
      navigate('/home');
    });

    loginRequest.catch((answer) => {
      alert(answer.response.data);
      setIsDisabled(false);
    });
  }

  return (
    <PageTemplate>
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
    </PageTemplate>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    box-sizing: border-box;
    height: 46px;
    border: 2px solid #94167fff;
    border-radius: 5px;
    font-family: 'ItcFeniceRegularOblique';
    font-size: 20px;
    margin: 3px 0;
    padding: 0 6px;

    ::placeholder {
      color: #94167fff;
    }
  }

  input:disabled {
    opacity: 0.5;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline-offset: 0px;
    outline: none;

    ::placeholder {
      opacity: 0.5;
    }
  }

  button {
    height: 46px;
    border-style: none;
    border-radius: 4px;
    background-color: #94167fff;
    font-family: 'ItcFeniceRegularOblique';
    font-size: 22px;
    color: white;
    margin: 3px 0 18px 0;
  }

  button:disabled {
    opacity: 0.5;
  }
`;
