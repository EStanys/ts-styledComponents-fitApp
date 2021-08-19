import React from 'react';
import plans from '../../../data/plans';
import { GSContainer, GSTitle, GSWrapper } from './styles';
import PlanCard from '../PlanCard/index';

const GetStartedPlans: React.FC = () => {
  return (
    <GSWrapper>
      <GSContainer>
        <GSTitle id='plans'>Class Plans</GSTitle>
        {plans.map(({ name, limit, programs, options, cost, paymentoptions, planId }) => (
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
      </GSContainer>
    </GSWrapper>
  );
};

export default GetStartedPlans;
