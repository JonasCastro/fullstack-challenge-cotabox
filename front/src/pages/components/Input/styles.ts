import styled, { css } from 'styled-components';
import { shade } from 'polished';
import Tooltip from './Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 50px;
  border-radius: 5px;
  padding: 16px;
  margin: 0 16px 10px 0;
  background: #FFF;
  border: 2px solid #FFF;
  display: flex;
  align-items: center;


  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${shade(0.2, '#00b8e2')};
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: ${shade(0.2, '#04d361')};
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #3a3a3a;
    &::placeholder {
      color: #a8a8b3;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
  }
  &::before {
    border-color: #c53030 transparent;
  }
`;
