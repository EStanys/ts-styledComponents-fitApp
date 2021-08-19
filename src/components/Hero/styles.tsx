import styled from "styled-components";

interface iBackGround {
  bcgrImg: HTMLImageElement;
}

export const HeroSection = styled.div<iBackGround>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100vw;
  height: calc(100vh + 70px);
  background: ${({ bcgrImg }) => `url(${bcgrImg}) no-repeat center`};
  background-size: cover;
  margin-top: -70px;
  padding-top: 70px;
  position: relative;
`;

export const HeroTitle = styled.h2`
  color: white;
  font-size: 4rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  white-space: pre-line;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const HeroSubtitle = styled.h3`
  color: white;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  white-space: pre-line;
`;
