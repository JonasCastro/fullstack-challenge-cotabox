import React, { createContext, useState, useCallback, useContext } from 'react';

export interface IUserFormData {
  firstName: string;
  lastName: string;
  participation: number;
}

interface UserContextData {
  users: IUserFormData[];
  createUser(data: Omit<IUserFormData, 'id'>): void;
  removeUser(id: number): void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<IUserFormData[]>([]);

  const createUser = useCallback(
    ({ firstName, lastName, participation }: Omit<IUserFormData, 'id'>) => {
      const user = { firstName, lastName, participation };
      setUsers(state => [...state, user]);
    },
    [],
  );

  const removeUser = useCallback((id: number) => {
    console.log(id);

    // setUsers(state => state.filter(user => user.id !== id));
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
