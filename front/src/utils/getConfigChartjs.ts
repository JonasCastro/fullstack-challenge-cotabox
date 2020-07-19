import { IUserFormData } from '../hooks/users';

interface IDatasets {
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor: string[];
}

interface IInfoGraphi {
  labels: string[];
  datasets: IDatasets[];
}

export function getInfoGraphi(users: IUserFormData[]): IInfoGraphi {
  const infoGraphi: IInfoGraphi = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  users.forEach(user => {
    infoGraphi.labels.push(user.firstName);
    infoGraphi.datasets[0].data.push(user.participation);
  });
  return infoGraphi;
}

export const options = {
  responsive: true,
  legend: {
    display: true,
    position: 'right',
    labels: {
      fontColor: '#000',
    },
  },
  layout: {
    padding: {
      left: 80,
      right: 0,
      bottom: 0,
      top: 0,
    },
  },
  tooltips: {
    enabled: true,
  },
  maintainAspectRatio: false,
};
