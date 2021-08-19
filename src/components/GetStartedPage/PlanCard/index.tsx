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
  options: optionsObj[] | [] ;
  cost: number | boolean;
  paymentoptions: boolean;
  planId: number
};

const PlanCard: React.FC<planCard> = ({ name, limit, programs, options, cost, paymentoptions, planId}) => {
  const price = paymentoptions ? options[0].price : cost;
  const from = paymentoptions && 'From';
  const history = useHistory();

  const onClickHandler = () => {
    options.length === 0 ? history.push(`/plan/${planId}`) : history.push(`/plan/options/${planId}`);
  };

  return (
    <PlanCardWrapper>
      <PlanCardContainer onClick={onClickHandler}>
        <div>
          <PlanCardTitle>{name}</PlanCardTitle>
          <PlanCardLimit>
            <strong>Limit:</strong> {limit}
          </PlanCardLimit>
          <PlanCardPrograms>
            <strong>Programs:</strong> {programs}
          </PlanCardPrograms>
        </div>
        <PlanCardPrice>
          {from} €{price} <BsChevronDoubleRight />
        </PlanCardPrice>
      </PlanCardContainer>
    </PlanCardWrapper>
  );
};

export default PlanCard
