import React from 'react'
import Hero from '../components/Hero/index';
import BackgroudImg from '../assets/bcgr3.jpg';
import GetStartedPlans from '../components/GetStartedPage/GetStartedPlans/index';

const GetStarted: React.FC = () => {
  const heroData = {
    title: 'Ready to get sarted?',
    subtitle: 'Choose One of Our awesome training Plans',
    btn: true,
    btnTxt: 'Choose a plan',
    bcgrImg: BackgroudImg,
  };

  const { title, subtitle, btn, btnTxt, bcgrImg } = heroData;

  return (
    <>
      <Hero title={title} subtitle={subtitle} btn={btn} btnTxt={btnTxt} bcgrImg={bcgrImg} />
      <GetStartedPlans />
    </>
  );
}

export default GetStarted
