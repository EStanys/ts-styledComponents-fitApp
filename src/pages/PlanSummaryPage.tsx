import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { MainContainer } from '../components/Container/styles';
import PlanSummary from '../components/PlanSummaryPage/PlanSummary/index';
import plans from '../data/plans';

const PlanSummaryPage:React.FC<{}> = () => {
  
  const [showPage, setShowPage] = useState(false);
  const {id: planId, monthly} = useParams<{id:string, monthly:string}>()
  const history = useHistory();
   
    useEffect(() => {
      plans.length >= +planId ? setShowPage(true) : history.push('/')
     
    },[planId, history])
 

  const payMonthly = monthly === 'monthly' ? true : false;

  return (
    <MainContainer>
      {showPage && <PlanSummary planId={planId} monthly={payMonthly} />}
    </MainContainer>)
}

export default PlanSummaryPage
