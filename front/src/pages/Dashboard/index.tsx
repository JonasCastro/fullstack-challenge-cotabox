import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import Header from '../components/Hearder';
import Table from '../components/Table';
import { getInfoGraphi, options } from '../../utils/getConfigChartjs';

import { useUser } from '../../hooks/users';

import { Container, Content, GraphiContent } from './styles';

const Dashboard: React.FC = () => {
  const { users } = useUser();
  const data = getInfoGraphi(users);

  return (
    <>
      <Header />
      <Container>
        <h1>Data</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Content>
          <Table />
          <GraphiContent>
            <Doughnut data={data} options={options} />
          </GraphiContent>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
