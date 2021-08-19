import React from "react";
import { Container, FooterNav, FooterNavItem } from './styles';

const NavBar: React.FC = () => {
  return (
  <>
    <Container>
      <FooterNav>
        <FooterNavItem>Terms and conditions</FooterNavItem>
        <FooterNavItem>Privacy Policy</FooterNavItem>
      </FooterNav>
    </Container>
  </>);
}

export default NavBar