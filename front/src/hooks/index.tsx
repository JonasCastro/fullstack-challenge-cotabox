import React from 'react';

import { UserProvider } from './users';

const AppProvider: React.FC = ({ children }) => (
  <UserProvider>{children}</UserProvider>
);
export default AppProvider;
