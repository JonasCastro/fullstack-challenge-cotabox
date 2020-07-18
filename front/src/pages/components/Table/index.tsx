import React from 'react';

import { TableContainer } from './styles';

const Table: React.FC = () => {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Participation</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>40%</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>8%</td>
          </tr>
          {/* {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td className="title">{transaction.title}</td>
                  <td className="income">
                    {transaction.type === 'outcome' && ' - '}
                    {formatValue(transaction.value)}
                  </td>
                  <td>{transaction.category.title}</td>
                  <td>
                    {new Date(transaction.created_at).toLocaleDateString(
                      'pt-br',
                    )}
                  </td>
                </tr>
              ))} */}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
