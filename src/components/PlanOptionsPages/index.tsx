import React from 'react';
import plans from '../../data/plans';
import { POptionsWrapper, POptionsContainer, POptionsTitle } from './styles';
import PlanCard from '../GetStartedPage/PlanCard/index';

const PlanOptions: React.FC<{ planId: string }> = ({ planId }) => {
  return (
    <POptionsWrapper>
      <POptionsContainer>
        <POptionsTitle id='plans'>Choose a Payment Option</POptionsTitle>
        {plans.filter(({ name, limit, programs, options, cost, paymentoptions, planId }) => (
          <PlanCard
            key={planId}
            name={name}
            limit={limit}
            programs={programs}
            options={options}
            cost={cost}
            paymentoptions={paymentoptions}
            planId={planId}
          />
        ))}
      </POptionsContainer>
    </POptionsWrapper>
  );
};

export default PlanOptions;
