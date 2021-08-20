import React, { useState } from 'react';
import { MainBtn } from '../../Buttons/MainButton/styles';
import DatePicker from 'react-date-picker';
import plans from '../../../data/plans';
import {
  PlanSummaryContainer,
  SummaryContainer,
  PlanSummaryWrapper,
  SummaryTitle,
  CalendarContainer,
  SummaryRow,
  DatePickerContainer,
  DateTitle,
  DateText,
} from './styles';

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
  commitment: string;
}[];


const PlanSummary: React.FC<{ planId: string; monthly: boolean }> = ({ planId, monthly }) => {
  const [value, onChange] = useState(new Date());
  
  const currentPlan: planCard = plans.filter((plan) => plan.planId === +planId);

  const { name, programs, commitment, cost, options } = currentPlan[0];

  const commitmenTotal: number | boolean = options.length === 0 ? cost : options[1].price;

  const commitmenCost: number | boolean = options.length === 0 ? cost : monthly ? options[0].price : options[1].price;

  const nth = function (d: number):string {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const billedOn =
    options.length === 0
      ? value.toLocaleDateString()
      : monthly
      ? `${value.getDate()}${nth(value.getDate())} of every month`
      : value.toLocaleDateString();
  ;
  

  const expirationHandler = (value: Date):string => {
    let date = new Date(value);

    function commitmentPeriodHandler():number {
      if (commitment.split(' ').includes('Months')) return date.setMonth(value.getMonth() + +commitment.split(' ')[0]);
      if (commitment.split(' ').includes('Week')) return date.setDate(value.getDate() + 7);
      return 0;
    }
    commitmentPeriodHandler();

    return date.toLocaleDateString();
  };

  return (
    <PlanSummaryWrapper>
      <PlanSummaryContainer>
        <SummaryContainer>
          <SummaryTitle>{name}</SummaryTitle>
          <SummaryRow>
            <strong>Programs:</strong> <p>{programs}</p>
          </SummaryRow>
          <SummaryRow>
            <strong>Initial Commitment:</strong> <p>{commitment}</p>
          </SummaryRow>
          <SummaryRow>
            <strong>Start Date:</strong> <p>{value.toLocaleDateString()}</p>
          </SummaryRow>
          <SummaryRow>
            <strong>Expiration Date:</strong> <p>{expirationHandler(value)}</p>
          </SummaryRow>
          <br />
          <SummaryRow>
            <strong>Commitment Cost:</strong> <p>€{commitmenCost}</p>
          </SummaryRow>
          <SummaryRow>
            <strong>Commitment Tax:</strong> <p>€0.00</p>
          </SummaryRow>
          <SummaryRow>
            <strong>Commitment Total:</strong> <p>€{commitmenTotal}</p>
          </SummaryRow>
          <SummaryRow>
            <strong>Billed on:</strong> <p>{billedOn}</p>
          </SummaryRow>
          <br />
          <SummaryRow>
            <strong>Initial Payment (Due Now):</strong> <strong>€{commitmenCost}</strong>
          </SummaryRow>
        </SummaryContainer>

        <CalendarContainer>
          <DateTitle>Start Date</DateTitle>
          <DateText>
            Please choose a date that you would like this membership to start. Your account will be charged once your
            purchase is complete.
          </DateText>
          <DatePickerContainer>
            <DatePicker onChange={onChange} value={value} minDate={new Date()} format='dd/MM/y' />
          </DatePickerContainer>
          <MainBtn to='/'>Next</MainBtn>
        </CalendarContainer>
      </PlanSummaryContainer>
    </PlanSummaryWrapper>
  );
};

export default PlanSummary;
