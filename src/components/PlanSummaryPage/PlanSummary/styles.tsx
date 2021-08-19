import styled from "styled-components";

export const PlanSummaryWrapper = styled.div`
margin-top: 110px;
`
export const PlanSummaryContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin: 40px;
  box-shadow: 0px 0px 4px 1px rgb(110, 110, 110);
  border: 1px solid rgb(110, 110, 110);
  border-radius: 8px;

  @media screen and (max-width: 1050px) {
    grid-template-columns: 1.4fr 1fr;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
export const SummaryContainer = styled.div`
  
  padding: 15px;
  width: 100%;
`;
export const SummaryTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #e85a93;
`;

export const SummaryRow = styled.div`
  line-height: 1.5;
  color: snow;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  white-space: pre-line;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 440px) {
    grid-template-columns: 1fr;
    margin-bottom: 0.5rem;
  }

  & strong {
    color: #038f9b;
    width: 100%;
  }

  & strong:nth-child(2) {
    color: #e85a93;
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  background-color: #ffffffe8;
  margin: 1.3rem;
  border-radius: 8px;
  padding: 1rem;

  & a {
    width: 100%;
    margin-top: 0;

    &:hover {
      background-color: #db3d7c;
      color: snow;
    }
  }

  & div {
    border-radius: 8px;
    border-color: #858585;
  }
`;
export const DateTitle = styled.h4`
font-size: 1.3rem;
`

export const DateText = styled.p``;

export const DatePickerContainer = styled.div`
  background-color: white;
  text-align: center
`;



