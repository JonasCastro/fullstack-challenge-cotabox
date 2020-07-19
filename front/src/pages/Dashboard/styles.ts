import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 20px 0 5px 0;
    color: #20232c;
  }
  p {
    color: #2b2e3b;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  padding: 30px 50px;
`;

export const GraphiContent = styled.div`
  min-width: 30%;
`;
