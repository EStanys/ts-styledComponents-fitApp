import React from 'react'
import Hero from '../components/Hero/index';
import ClassScheduleHP from '../components/homePage/ClassSchedule/index';
import AnyFitnessLevel from '../components/homePage/AnyFitnessLevel/index';
import BackgroudImg from '../assets/bcgr1.jpg';

const Home: React.FC = () => {
  const heroData = {
    title: 'Your success is \n our success',
    subtitle: 'World class CrossFit box in Vilnius',
    btn: true,
    btnTxt: 'Get Started',
    bcgrImg: BackgroudImg,
  };

  const { title, subtitle, btn, btnTxt, bcgrImg } = heroData;

  return (
    <>
      <Hero title={title} subtitle={subtitle} btn={btn} btnTxt={btnTxt} bcgrImg={bcgrImg} />
      <ClassScheduleHP />
      <AnyFitnessLevel />

      <h1 style={{ background: 'black', color: 'white' }}>Insta feed</h1>
    </>
  );
}

export default Home
