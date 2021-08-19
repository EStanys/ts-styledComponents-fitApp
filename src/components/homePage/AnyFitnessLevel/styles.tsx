import styled from 'styled-components';

export const Wrapper = styled.section`
  /* height: 100vh;
  width: 100vw; */
  background: black;
  
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & a {
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProgramsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 2rem 0;
  gap: 2rem;

  @media screen and (max-width: 1044px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 715px) {
    grid-template-columns: 1fr;
  }
`;



