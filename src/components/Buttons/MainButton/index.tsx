import React from 'react'
import { MainBtn } from './styles'

const MainButton: React.FC<{to: string}> = ({children, to}) => {
  return (
    <MainBtn to={to}>
      { children }
    </MainBtn>
  )
}

export default MainButton
