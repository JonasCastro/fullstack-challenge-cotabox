export const data = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

export const options = {
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
  maintainAspectRatio: false,
};
