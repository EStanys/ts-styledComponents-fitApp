import React from 'react';
import plans from '../../data/plans'
import { POptionsWrapper, POptionsContainer, POptionsTitle } from './styles';
import PlanCard from '../GetStartedPage/PlanCard/index';

const PlanOptions: React.FC<{ planOptionsId: string }> = ({ planOptionsId }) => {
  
  return (
    <POptionsWrapper>
      <POptionsContainer>
        <POptionsTitle>Choose a Payment Option</POptionsTitle>
        {plans.map(({ name, limit, programs, options, cost, paymentoptions, planId }) => {
          if (planId === +planOptionsId) {
            return options.map((option, index) => (
              <PlanCard
                key={planId + Math.random()}
                index={index + 1}
                name={name}
                limit={limit}
                programs={programs}
                options={options}
                cost={cost}
                paymentoptions={paymentoptions}
                planId={planId}
                initialCommitment={option.name}
                commitmentPrice={`€${option.price} ${option.commitment ? `x ${option.commitment} months` : ''}`}
              />
            ));
          } return null
        })}

      </POptionsContainer>
    </POptionsWrapper>
  );
};

export default PlanOptions;