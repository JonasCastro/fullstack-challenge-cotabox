import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 25px 0 5px 0;
    color: #20232c;
  }
  p {
    color: #2b2e3b;
    margin-bottom: 35px;
  }
`;
export const Content = styled.div`
  width: 95%;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  grid-gap: 20px;
`;

export const GraphiContent = styled.div`
  padding-top: 30px;
`;
