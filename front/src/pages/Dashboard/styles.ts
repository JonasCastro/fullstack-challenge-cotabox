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
    margin-bottom: 45px;
  }
`;
export const Content = styled.div`
  width: 95%;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  grid-gap: 20px;
`;

export const Message = styled.div`
  padding: 20px;
  background-color: #ff9800;
  color: white;
  opacity: 1;
  transition: opacity 0.6s;

  border-radius: 4px;
  font-weight: 500;
`;
