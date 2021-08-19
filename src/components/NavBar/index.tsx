import React, { useState, useEffect } from "react";
import { Container, InnerContainer, Logo, Menu, MenuItem, BurgerIcon } from './styles';
import ContentContainer from '../Container/index';

const Footer: React.FC = () => {
  const [scrollNav, setScrollNav] = useState<boolean>(false)

  const changeNav = () => {
    if(window.scrollY >= 70) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
      <Container scrollNav={scrollNav}>
        <ContentContainer>
          <InnerContainer>
            <Logo to='/'>Crossfit 79</Logo>
            <Menu>
              <MenuItem to='/'>Drop In</MenuItem>
              <MenuItem to='/'>WOD</MenuItem>
              <MenuItem to='/'>Schedule</MenuItem>
              <MenuItem to='/getstarted'>Get Started</MenuItem>
              <MenuItem to='/'>Contact</MenuItem>
            </Menu>
            <BurgerIcon />
          </InnerContainer>
        </ContentContainer>
      </Container>
    </>
  );
}

export default Footer