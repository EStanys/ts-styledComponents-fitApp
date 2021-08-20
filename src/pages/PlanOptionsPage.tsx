import React from 'react';
import { useParams } from 'react-router-dom';
import { MainContainer } from '../components/Container/styles';
import PlanOptions from '../components/PlanOptionsPages/index';

const PlanOptionsPage: React.FC = () => {

  const {id: planOptionsId} = useParams<{id: string}>()
  
  return (
    <MainContainer>
      <PlanOptions planOptionsId={planOptionsId} />
    </MainContainer>
  );
};

export default PlanOptionsPage;
