import React from 'react'
import { Wrapper, Container, Title, Subtitle } from './styles';
import { MainBtn } from '../../Buttons/MainButton/styles';

const ClassScheduleHP = () => {
  return (
    <Wrapper>
      <Container>
        <Title>We prove you're capable <br/> of amazing things</Title>
        <Subtitle>
          Our methodology is designed for anyone at any fitness level. Our workouts transform the mind, body, and
          spirit, and focus on a challenging, realistic, and measurable journey toward big, holistic change.
        </Subtitle>
        <MainBtn to="/">Class Schedule</MainBtn>
      </Container>
    </Wrapper>
  );
}

export default ClassScheduleHP
