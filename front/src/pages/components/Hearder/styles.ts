import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #00b8e2;
  padding: 40px 0;

  form {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      height: 50px;
      padding: 0 24px;
      border: 0;
      border-radius: 5px;
      color: #3a3a3a;
      margin-right: 16px;

      &::placeholder {
        color: #a8a8b3;
      }
    }
    button {
      height: 50px;
      width: 190px;
      background: #04d361;
      border-radius: 5px;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#04d361')};
      }
    }
  }
`;
