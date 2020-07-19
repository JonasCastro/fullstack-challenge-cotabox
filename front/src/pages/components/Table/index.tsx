import React from 'react';

import { TableContainer } from './styles';

const datas = [
  {
    id: 1,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 2,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 3,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 4,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 5,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 6,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 1,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 2,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 3,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 4,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 5,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 6,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 1,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 2,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 3,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 4,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 5,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
  {
    id: 6,
    firstName: 'Jonas',
    lastName: 'Castro',
    participation: '50',
  },
];

const Table: React.FC = () => {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Participation</th>
          </tr>
        </thead>

        <tbody>
          {datas.map((data, indice) => (
            <tr key={data.id}>
              <td>{indice + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{`${data.participation}%`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
