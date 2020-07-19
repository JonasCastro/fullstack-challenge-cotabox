import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { useUser } from '../../../hooks/users';

import { TableContainer } from './styles';

const Table: React.FC = () => {
  const { users, removeUser } = useUser();
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Participation</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, indice) => (
            <tr>
              <td>{indice + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{`${user.participation}%`}</td>
              <td>
                <FiTrash2
                  size={20}
                  color="#c53030"
                  onClick={() => removeUser(1)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
