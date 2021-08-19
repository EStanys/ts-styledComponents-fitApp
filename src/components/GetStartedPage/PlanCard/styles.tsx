import styled from "styled-components";

export const PlanCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  @media screen and (max-width: 1200px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const PlanCardContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1120px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgb(110, 110, 110);
  border-radius: 8px;
  margin: 0 auto;
  margin-bottom: 1rem;
  background-color: #000000;
  box-shadow: 0px 0px 4px 1px rgb(110, 110, 110);
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    background-color: #ffffff13;
  }

  
`;
export const PlanCardTitle = styled.div`
  color: #e85a93;
  font-size: 1.3rem;
  margin-bottom: 1rem;

  &:hover {
    color: #d14d82;
  }
`;
export const PlanCardLimit = styled.div`
  color: white;

  & strong {
    color: #038f9b;
  }

  & strong:hover {
    color: #027580;
  }
  
`;
export const PlanCardPrograms = styled.div`
  color: white;

  & strong {
    color: #038f9b;
  }

  & strong:hover {
    color: #027580;
  }
`;
export const PlanCardPrice = styled.div`
  color: #038f9b;
  font-size: 1.4rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #027580;
  }

  & svg {
    color: #e85a93;
    margin-left: 5px;

    & svg:hover {
      color: #d14d82;
    }
  }
`;