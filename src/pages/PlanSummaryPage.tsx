import React from 'react'
import { useParams } from 'react-router-dom';
import { MainContainer } from '../components/Container/styles';
import PlanSummary from '../components/PlanSummaryPage/PlanSummary/index';

const PlanSummaryPage:React.FC<{}> = () => {

  const {id: planId, monthly} = useParams<{id:string, monthly:string}>()

  const payMonthly = monthly === 'monthly' ? true : false;
  
  return (
    <MainContainer>
      <PlanSummary planId={planId} monthly={payMonthly} />
    </MainContainer>
  );
}

export default PlanSummaryPage
