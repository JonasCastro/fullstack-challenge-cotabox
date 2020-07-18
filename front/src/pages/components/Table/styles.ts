import styled from 'styled-components';

// export const TableContainer = styled.table`
//   border-collapse: collapse;
//   width: auto;
//   border: 1px solid #ddd;
//   text-align: left;

//   th,
//   td {
//     border: 1px solid #ddd;
//     text-align: left;
//     padding: 15px;
//   }
//   tr:nth-child(even) {
//     background-color: #f2f2f2;
//   }
// `;

export const TableContainer = styled.section`
  margin-top: 14px;
  flex: 1;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
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
      color: #969cb3;
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    th:last-child {
      text-align: center;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
      text-align: center;
    }
  }
`;
