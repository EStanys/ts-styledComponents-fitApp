import React from 'react'
import { useHistory } from 'react-router';
import { PlanCardWrapper, PlanCardContainer, PlanCardTitle, PlanCardLimit, PlanCardPrograms, PlanCardPrice } from './styles';
import {BsChevronDoubleRight} from 'react-icons/bs'

type optionsObj =
   {
      name: string;
      price: number;
      commitment: number;
    }
  | {
      name: string;
      price: number;
    } 

type planCard = {
  name: string;
  limit: string;
  programs: string;
  options: optionsObj[] | [];
  cost: number | boolean;
  paymentoptions: boolean;
  planId: number;
  index?: number;
  initialCommitment?: string;
  commitmentPrice?: string;
};

const PlanCard: React.FC<planCard> = ({
  name,
  limit,
  programs,
  options,
  cost,
  paymentoptions,
  planId,
  index,
  initialCommitment,
  commitmentPrice,
}) => {
  const price = paymentoptions ? options[0].price : cost;
  const from = paymentoptions && 'From';
  const history = useHistory();

  const onClickHandler = () => {
    options.length === 0 ? history.push(`/plan/${planId}`) : history.push(`/plan/options/${planId}`);

    initialCommitment === 'Monthly' && history.push(`/plan/${planId}/monthly`)
    initialCommitment === 'Pay in Full' && history.push(`/plan/${planId}/`);
  };

  return (
    <PlanCardWrapper>
      <PlanCardContainer onClick={onClickHandler}>
        <div>
          <PlanCardTitle>{index ? `Option ${index}` : name}</PlanCardTitle>
          {!index ? (
            <>
              <PlanCardLimit>
                <strong>Limit:</strong> {limit}
              </PlanCardLimit>
              <PlanCardPrograms>
                <strong>Programs:</strong> {programs}
              </PlanCardPrograms>
            </>
          ) : (
            <>
              <PlanCardPrograms>
                <strong>{name}</strong>
              </PlanCardPrograms>
              <PlanCardPrograms>
                <strong>Initial Commitment:</strong> {initialCommitment} @ {commitmentPrice}
              </PlanCardPrograms>
            </>
          )}
        </div>
        {!index ? (
          <PlanCardPrice>
            {from} €{price} <BsChevronDoubleRight />
          </PlanCardPrice>
        ) : (
          <PlanCardPrice>
            {commitmentPrice} <BsChevronDoubleRight />
          </PlanCardPrice>
        )}
      </PlanCardContainer>
    </PlanCardWrapper>
  );
};

export default PlanCard
