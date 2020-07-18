import React from 'react';

import Header from '../components/Hearder';
import Table from '../components/Table';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Data</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Content>
          <Table />
          <h1>Gráfico</h1>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
