import React from 'react';

import GlobalStyled from './styles/global';
import AppProvider from './hooks';

import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Dashboard />
    </AppProvider>
    <GlobalStyled />
  </>
);

export default App;
