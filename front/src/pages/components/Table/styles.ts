import styled from 'styled-components';

export const TableContainer = styled.section`
  min-width: 60%;
  margin-bottom: 30px;
  table {
    border-spacing: 0 8px;

    th {
      color: #6b7394;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #6b7394;
    }

    td:first-child {
      color: #4b5168;
      border-radius: 8px 0 0 8px;
    }

    th:last-child {
      text-align: center;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
      width: 5px;
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  padding: 5px;
  &:hover {
    svg {
      width: 30px;
    }
  }
`;
