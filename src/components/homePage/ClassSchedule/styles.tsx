import styled from 'styled-components'
import bcgrImg from '../../../assets/bcgr2.jpeg';

export const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background: url(${bcgrImg}) no-repeat center;
  background-size: cover;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  @media screen and (max-width: 950px){
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 3rem;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;

  @media screen and (max-width: 950px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  
`;

export const Subtitle = styled.h3`
  color: white;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 40vw;

  @media screen and (max-width: 950px) {
    max-width: 60vw;
    text-align: center;
  }

  @media screen and (max-width: 650px) {
    max-width: 80vw;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    max-width: 90vw;
    text-align: center;
  }
`;

