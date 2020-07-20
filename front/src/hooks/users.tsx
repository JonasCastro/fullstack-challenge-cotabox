import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';

export interface IUserFormData {
  _id: string;
  firstName: string;
  lastName: string;
  participation: number;
}

interface UserContextData {
  users: IUserFormData[];
  createUser(data: Omit<IUserFormData, '_id'>): void;
  removeUser(_id: string): void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<IUserFormData[]>([]);

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  const createUser = useCallback(
    async ({
      firstName,
      lastName,
      participation,
    }: Omit<IUserFormData, '_id'>) => {
      const user = { firstName, lastName, participation };

      const response = await api.post('/users', user);

      setUsers(state => [...state, response.data]);
    },
    [],
  );

  const removeUser = useCallback(async (_id: string) => {
    await api.delete(`/users/${_id}`);

    setUsers(state => state.filter(user => user._id !== _id));
  }, []);

  return (
    <UserContext.Provider value={{ createUser, removeUser, users }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export { UserProvider, useUser };
