import styled from "styled-components";
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

interface IscrollNav {
  scrollNav: boolean
}

export const Container = styled.div<IscrollNav>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  color: #000000;
  background: ${({ scrollNav }) => (scrollNav ? '#000000e8' : '#000000b0')};
  border-bottom: 1px solid black;
  box-shadow: 0 2px 4px -1px rgb(110, 110, 110);
  transition: 0.4s all ease;
  z-index: 10;
`;
export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

export const Logo = styled(Link)`
  margin-left: 40px;
  font-size: 1.5em;
  color: white;
`;

export const Menu = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  color: white;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled(Link)`
  line-height: 70px;
  height: 100%;
  margin-right: 40px;
  font-size: 1.2rem;
  transition: 0.1s all ease;

  &:hover {
    color: #038f9b;
  }

  &:focus {
    color: #038f9b;
    border-bottom: 2px solid #038f9b;
  }

  
`;

export const BurgerIcon = styled(FaBars)`

  display: none;

  @media screen and (max-width: 768px) {
    color: white;
    font-size: 1.8rem;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    transform: translate(-100%, 70%);
  }
`;