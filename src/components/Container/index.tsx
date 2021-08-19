import React from "react"
import {MainContainer} from './styles'

const ContentContainer: React.FC = ({children}) => {
  return (
    <MainContainer>{children}</MainContainer>
  )
}

export default ContentContainer;