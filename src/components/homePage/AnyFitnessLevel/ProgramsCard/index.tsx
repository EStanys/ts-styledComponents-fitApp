import React from 'react';
import { Container, Title, Description } from './styles';

const ProgramsCard: React.FC<{title: string; text: string}> = ({title, text}) => {
  return (
    
      <Container>
        <Title>{title}</Title>
        <Description>{text}</Description>
      </Container>
    
  );
};

export default ProgramsCard;
