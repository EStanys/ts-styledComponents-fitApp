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

  const scrollWithOffset = (el: HTMLElement, offset: number) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth',
    });
  };  

  return (
    <HeroSection bcgrImg={bcgrImg}>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
      {btn && (
        <MainBtn to='/getstarted#plans' scroll={(el) => scrollWithOffset(el, 185)}>
          {btnTxt}
        </MainBtn>
      )}
    </HeroSection>
  );
};

export default Hero
