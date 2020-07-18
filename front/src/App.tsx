import React from 'react';

import GlobalStyled from './styles/global';

import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <>
    <Dashboard />
    <GlobalStyled />
  </>
);

export default App;
