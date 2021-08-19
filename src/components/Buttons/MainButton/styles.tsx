import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link';

export const MainBtn = styled(Link)`
  color: white;
  background-color: #e95992;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  padding: 8px 15px;
  margin-top: 1.5rem;
  cursor: pointer;

  &:hover {
    color: black;
    background: snow;
  }
`;