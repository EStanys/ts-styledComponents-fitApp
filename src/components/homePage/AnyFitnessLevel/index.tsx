import React from 'react';
import { Wrapper, Container, Title, ProgramsContainer } from './styles';
import { MainBtn } from '../../Buttons/MainButton/styles';
import ProgramsCard from './ProgramsCard/index';
import programs from '../../../data/programs'


const AnyFitnessLevel = () => {

  const scrollWithOffset = (el:HTMLElement, offset:number) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });  
}  

  return (
    <Wrapper>
      <Container>
        <Title>WITH ANY FITNESS LEVEL</Title>
        <ProgramsContainer>
          {programs.map(({ title, text }) => (
            <ProgramsCard key={title} title={title} text={text}/>
          ))}
        </ProgramsContainer>
        <MainBtn to='/getstarted#plans' scroll={(el) => scrollWithOffset(el, 185)}>
          See Plans
        </MainBtn>
      </Container>
    </Wrapper>
  );
};

export default AnyFitnessLevel;
