import React from 'react'
import { HeroSection, HeroTitle, HeroSubtitle } from './styles';
import { MainBtn } from '../Buttons/MainButton/styles';

type heroPr = {
  title: string; 
  subtitle: string; 
  btn: boolean; 
  btnTxt: string; 
  bcgrImg: HTMLImageElement
}

const Hero: React.FC<heroPr> = ({ title, subtitle, btn, btnTxt, bcgrImg }) => {
  console.log(bcgrImg);

  return (
    <HeroSection bcgrImg={bcgrImg}>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
      {btn && <MainBtn to={''}>{btnTxt}</MainBtn>}
    </HeroSection>
  );
};

export default Hero
