import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { useUser } from '../../../hooks/users';

import { TableContainer, Button } from './styles';

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
            <tr key={user._id}>
              <td>{indice + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{`${user.participation}%`}</td>
              <td>
                <Button type="button" onClick={() => removeUser(user._id)}>
                  <FiTrash2 size={20} color="#c53030" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
